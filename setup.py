from setuptools import setup, find_packages

with open("README.md") as f:
    readme = f.read()

with open("requirements.txt") as f:
    requirements = f.read().split()

setup(name="homura",
      version="0.3.2",
      author="moskomule",
      author_email="hataya@nlab.jp",
      packages=find_packages(exclude=["test", "docs", "examples"]),
      url="https://github.com/moskomule/homura",
      description="support tool for research experiments",
      long_description=readme,
      license="BSD",
      install_requires=requirements,
      )
