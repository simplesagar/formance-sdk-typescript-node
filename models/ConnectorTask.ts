/**
 * Formance Stack API
 * Open, modular foundation for unique payments flows  # Introduction This API is documented in **OpenAPI format**.  # Authentication Formance Stack offers one forms of authentication:   - OAuth2 OAuth2 - an open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications. <SecurityDefinitions /> 
 *
 * OpenAPI spec version: v0.2.2
 * Contact: support@formance.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { StripeTask } from '../models/StripeTask';
import { HttpFile } from '../http/http';

export class ConnectorTask {
    /**
    * The id of the oldest BalanceTransaction fetched from stripe for this account
    */
    'oldestId'?: string;
    /**
    * The creation date of the oldest BalanceTransaction fetched from stripe for this account
    */
    'oldestDate'?: Date;
    /**
    * The id of the more recent BalanceTransaction fetched from stripe for this account
    */
    'moreRecentId'?: string;
    /**
    * The creation date of the more recent BalanceTransaction fetched from stripe for this account
    */
    'moreRecentDate'?: Date;
    'noMoreHistory'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "oldestId",
            "baseName": "oldestId",
            "type": "string",
            "format": ""
        },
        {
            "name": "oldestDate",
            "baseName": "oldestDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "moreRecentId",
            "baseName": "moreRecentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "moreRecentDate",
            "baseName": "moreRecentDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "noMoreHistory",
            "baseName": "noMoreHistory",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConnectorTask.attributeTypeMap;
    }

    public constructor() {
    }
}

