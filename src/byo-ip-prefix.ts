// https://www.terraform.io/docs/providers/cloudflare/r/byo_ip_prefix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ByoIpPrefixConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/byo_ip_prefix#account_id ByoIpPrefix#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/byo_ip_prefix#advertisement ByoIpPrefix#advertisement}
  */
  readonly advertisement?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/byo_ip_prefix#description ByoIpPrefix#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/byo_ip_prefix#id ByoIpPrefix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/byo_ip_prefix#prefix_id ByoIpPrefix#prefix_id}
  */
  readonly prefixId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/byo_ip_prefix cloudflare_byo_ip_prefix}
*/
export class ByoIpPrefix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_byo_ip_prefix";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/byo_ip_prefix cloudflare_byo_ip_prefix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ByoIpPrefixConfig
  */
  public constructor(scope: Construct, id: string, config: ByoIpPrefixConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_byo_ip_prefix',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.20.0',
        providerVersionConstraint: '~> 3.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._advertisement = config.advertisement;
    this._description = config.description;
    this._id = config.id;
    this._prefixId = config.prefixId;
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

  // advertisement - computed: true, optional: true, required: false
  private _advertisement?: string; 
  public get advertisement() {
    return this.getStringAttribute('advertisement');
  }
  public set advertisement(value: string) {
    this._advertisement = value;
  }
  public resetAdvertisement() {
    this._advertisement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementInput() {
    return this._advertisement;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // prefix_id - computed: false, optional: false, required: true
  private _prefixId?: string; 
  public get prefixId() {
    return this.getStringAttribute('prefix_id');
  }
  public set prefixId(value: string) {
    this._prefixId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixIdInput() {
    return this._prefixId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      advertisement: cdktf.stringToTerraform(this._advertisement),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      prefix_id: cdktf.stringToTerraform(this._prefixId),
    };
  }
}
