---
template: post
title: SSH login using key only
slug: ssh-login-using-key-only
draft: false
date: 2015-05-14T12:31:14.155Z
description: How to connect to remote server using SSH key only
category: Code
tags:
  - Code
  - Linux
  - Tips
---
## Connect to remote server using local machine/client ssh key for authentication.

1. Generate SSH key using the command `ssh-keygen` in OS X and Linux terminal if is not already generated at `/.ssh`. Window user can use PuttyGen.
2. Copy client ssh key to remote machine authorized_key file\
   `cat \~/.ssh/id_rsa.pub | ssh user@123.45.56.78 “mkdir -p \~/.ssh && cat >> ~/.ssh/authorized_keys`
3. Edit remote machine `/etc/ssh/sshd_config PasswordAuthentication no RSAAuthentication yes PubkeyAuthentication yes`

## Bonus: Generate server private key for anywhere access using key only

1. Generate key on server `ssh-keygen`
2. Put the key into authorized_key file `echo \`cat \~/.ssh/uploaded_key.pub\` >> \~/.ssh/authorized_keys`
3. Copy key from machine to local machine using SCP `scp user@192.168.0.103:/home/user/.ssh/id_rsa ~/user/Desktop`
(Edit the username, IP address and folder accordingly)
5. Convert the `id_rsa` file to putty file for use in Putty
6. Connect using Putty
