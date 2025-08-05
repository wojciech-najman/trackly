<?php

declare(strict_types=1);

namespace App\Domains\Actions\Enums;

use Spatie\Enum\Enum;

/**
 * @method static self STORE_CREATED()
 * @method static self STORE_UPDATED()
 * @method static self STORE_DELETED()
 * @method static self ITEM_CREATED()
 * @method static self ITEM_UPDATED()
 * @method static self ITEM_DELETED()
 * @method static self ITEM_NOTE_CREATED()
 * @method static self ITEM_NOTE_UPDATED()
 * @method static self ITEM_NOTE_DELETED()
 * @method static self ITEM_STOCK_CREATED()
 * @method static self ITEM_STOCK_UPDATED()
 * @method static self ITEM_STOCK_MOVED()
 * @method static self ITEM_STOCK_DELETED()
 * @method static self ITEM_TAG_ATTACHED()
 * @method static self ITEM_TAG_DETACHED()
 * @method static self TAG_CREATED()
 * @method static self TAG_UPDATED()
 * @method static self TAG_DELETED()
 * @method static self USER_REGISTERED()
 * @method static self USER_UPDATED_HIS_ACCOUNT()
 * @method static self USER_UPDATED_HIS_PASSWORD()
 * @method static self USER_CREATED()
 * @method static self USER_ACCOUNT_UPDATED()
 * @method static self USER_PASSWORD_CHANGED()
 * @method static self USER_DELETED()
 */
class ActionTypes extends Enum {}
