// https://www.terraform.io/docs/providers/cloudflare/r/access_keys_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessKeysConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_keys_configuration#account_id AccessKeysConfiguration#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_keys_configuration#key_rotation_interval_days AccessKeysConfiguration#key_rotation_interval_days}
  */
  readonly keyRotationIntervalDays?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/access_keys_configuration cloudflare_access_keys_configuration}
*/
export class AccessKeysConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_access_keys_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/access_keys_configuration cloudflare_access_keys_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessKeysConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AccessKeysConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_access_keys_configuration',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._keyRotationIntervalDays = config.keyRotationIntervalDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_rotation_interval_days - computed: true, optional: true, required: false
  private _keyRotationIntervalDays?: number; 
  public get keyRotationIntervalDays() {
    return this.getNumberAttribute('key_rotation_interval_days');
  }
  public set keyRotationIntervalDays(value: number) {
    this._keyRotationIntervalDays = value;
  }
  public resetKeyRotationIntervalDays() {
    this._keyRotationIntervalDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRotationIntervalDaysInput() {
    return this._keyRotationIntervalDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      key_rotation_interval_days: cdktf.numberToTerraform(this._keyRotationIntervalDays),
    };
  }
}
