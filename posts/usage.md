---
title: Permanent Seeder In Action
page: usage
---

## Basic Usage

:zap: The Permanent Seeder is a CLI tool that is also a daemon for your hyperdrives and a dashboard.

Let's learn how to use it.

```bash
# First, create the config file. We only need to do this once.

$ permanent-seeder config:init

# Then, we can start the seeder

$ permanent-seeder start
```

---

## Manage Keys

:key: Now, we can add some keys!

```bash
$ permanent-seeder key:add -k=YOUR_KEY
```

On a similar fashion, you can remove a key:


```bash
$ permanent-seeder key:remove -k=YOUR_KEY
```
---

## The Dashboard

:computer: The Permanent Seeder also includes a dashboard that provides a visual reference of all your drives and their status.

You can launch the dashboard by running:

```bash
$ permanent-seeder dashboard
```

---

## More

Want to know more? Check out the [docs](https://github.com/geut/permanent-seeder/blob/master/README.md).

If you don't find what you are looking there, feel free to open an issue :+1:
