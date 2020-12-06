// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import field from '@nozbe/watermelondb/decorators/field';
import json from '@nozbe/watermelondb/decorators/json';
import {Model} from '@nozbe/watermelondb';

import {MM_TABLES} from '@constants/database';

const {ROLE} = MM_TABLES.SERVER;

export default class Role extends Model {
    static table = ROLE

    @field('name') name!: string
    @field('role_id') roleId! : string
    @json('permissions', (rawJson) => rawJson) permissions!: string[]
}