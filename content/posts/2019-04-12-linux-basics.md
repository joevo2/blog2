---
template: post
title: Linux Basics
slug: linux-basics
draft: false
date: 2013-12-16T09:58:55.570Z
description: Some nice essential linux command
category: Code
tags:
  - Code
  - Linux
---

## To see current Directory - `pwd`

Example output, /User/Joel

## List Directory - `ls`

For more advance view `ls -ls` for viewing file permission.

## Change Directory - `cd`

Example, `cd Document`

`cd ..` to go back up one directory (from `/Joel/Document` to `/Joel`)

## Copy — `cp`

Example, `cp Joel.txt Document` (Copy to Document)

Example, `cp Joel.txt Joel1.txt` (Make 2 copy of same file but different name)

## Move (Cut) — `mv`

Example, `mv Joel.txt Document` (Move to Document)

Example, `mv Joel.txt Joel1.txt` (To rename file)

## Remove (delete) - `rm`

`rm` to remove normal file

`rm -rf` force remove, to remove directory(folder) containing files/folders

## Remove Directory (Folder)

Only works if folder is empty if not use `rm -rf`

## Text Editor, `nano` or `vi`

Example `nano Joel.txt`

If file already exists it will edit it, if it doesn’t exists it will create one when you save it.

## Get root privilege `sudo`

Example `sudo nano Joel.txt`, to edit file that require root access

Example `sudo rm Joel.txt`

## Change file permission `chmod 666`

Example, `chmod 666 Joel.txt`

`chmod 666` means that all users can read and write but do not execute

`chmod 777` allows all actions for all users

`chmod 744` allows only owner to do all actions, group and other are allowed only to read

## `echo` for system to return output

Example, `echo Joel`, output, `Joel`


## `whoami` to see current User name.
