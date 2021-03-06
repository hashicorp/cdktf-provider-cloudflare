// https://www.terraform.io/docs/providers/cloudflare/r/account_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID to create the account member in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/account_member#account_id AccountMember#account_id}
  */
  readonly accountId?: string;
  /**
  * The email address of the user who you wish to manage. Following creation, this field becomes read only via the API and cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/account_member#email_address AccountMember#email_address}
  */
  readonly emailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/account_member#id AccountMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of account role IDs that you want to assign to a member.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/account_member#role_ids AccountMember#role_ids}
  */
  readonly roleIds: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/account_member cloudflare_account_member}
*/
export class AccountMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_account_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/account_member cloudflare_account_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountMemberConfig
  */
  public constructor(scope: Construct, id: string, config: AccountMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_account_member',
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
    this._emailAddress = config.emailAddress;
    this._id = config.id;
    this._roleIds = config.roleIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // email_address - computed: false, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
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

  // role_ids - computed: false, optional: false, required: true
  private _roleIds?: string[]; 
  public get roleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('role_ids'));
  }
  public set roleIds(value: string[]) {
    this._roleIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdsInput() {
    return this._roleIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      email_address: cdktf.stringToTerraform(this._emailAddress),
      id: cdktf.stringToTerraform(this._id),
      role_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleIds),
    };
  }
}
