---
title: "Repository"
date: 2020-07-26T12:46:49-07:00
draft: false
layout: "docs"
---

# Repository
---

Contract for managing repositories.

> Branches and tags are stored in `references`.
References are stored as a hash of the reference name.
Changes are stored as the content id hash.
Historical changes are tracked through `ReferenceChanged` events.
Inherits from OpenZepplin `AccessControl`.
##### Roles
- `DEFAULT_ADMIN_ROLE` allows account to grant or revoke roles 
- `CONTRIBUTOR_ROLE` allows account to push changes



## Variables
---

#### `bytes32 CONTRIBUTOR_ROLE`
#### `mapping(bytes32 => bytes32) references`


## Functions
---

#### `constructor()` (public)
Creates a new empty repository.

> Assigns `DEFAULT_ADMIN_ROLE` and `CONTRIBUTOR_ROLE` to the sender.
#### `push(bytes32 ref, bytes32 cid)` (public)
Push changes to a reference.

> Requires the `CONTRIBUTOR_ROLE`. Emits a `ReferenceChanged` event.
##### Params
- `ref` reference hash
- `cid` content id hash

## Events
---

#### `ReferenceChanged(bytes32 ref, bytes32 cid, address sender)`
Event used to store reference changes.

> Subscribe to this event to track change history.
##### Params
- `ref` reference hash
- `cid` content id hash
- `sender` address of the sender
