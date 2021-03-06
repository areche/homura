from abc import ABCMeta
from collections import ChainMap
from collections.abc import Mapping
from typing import Iterable


class Callback(metaclass=ABCMeta):
    """ Base class of Callback class
    """

    def before_iteration(self, data: Mapping) -> Mapping:
        pass

    def after_iteration(self, data: Mapping) -> Mapping:
        pass

    def before_epoch(self, data: Mapping) -> Mapping:
        pass

    def after_epoch(self, data: Mapping) -> Mapping:
        pass

    def before_all(self, data: Mapping) -> Mapping:
        pass

    def after_all(self, data: Mapping) -> Mapping:
        pass

    def close(self):
        pass

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.close()


class _NoOpCallback(Callback):
    def __init__(self, *args, **kwargs):
        pass


class CallbackList(Callback):
    """ Combine some callbacks

    :param callbacks: callbacks
    """

    def __init__(self, *callbacks: Iterable[Callback] or Callback):
        if callbacks is None:
            raise TypeError("callbacks is expected to be Callback but None")

        if not isinstance(callbacks, Iterable):
            callbacks = [callbacks]

        callbacks = [c for c in callbacks if c is not None]
        for c in callbacks:
            if not isinstance(c, Callback):
                raise TypeError(f"{c} is not callback!")
        self._callbacks: Iterable[Callback] = list(callbacks)

    def before_iteration(self, data: Mapping):
        return self._cat([c.before_iteration(data) for c in self._callbacks])

    def after_iteration(self, data: Mapping):
        return self._cat([c.after_iteration(data) for c in self._callbacks])

    def before_epoch(self, data: Mapping):
        return self._cat([c.before_epoch(data) for c in self._callbacks])

    def after_epoch(self, data: Mapping):
        return self._cat([c.after_epoch(data) for c in self._callbacks])

    def after_all(self, data: Mapping):
        return self._cat([c.after_all(data) for c in self._callbacks])

    def close(self):
        for c in self._callbacks:
            c.close()

    @staticmethod
    def _cat(maps: list):
        # make callbacks' return to a single map
        maps = [m for m in maps if m is not None]
        return dict(ChainMap(*maps))
