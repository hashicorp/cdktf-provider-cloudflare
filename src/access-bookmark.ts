// https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessBookmarkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. Conflicts with `zone_id`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#account_id AccessBookmark#account_id}
  */
  readonly accountId?: string;
  /**
  * Option to show/hide the bookmark in the app launcher. Defaults to `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#app_launcher_visible AccessBookmark#app_launcher_visible}
  */
  readonly appLauncherVisible?: boolean | cdktf.IResolvable;
  /**
  * The domain of the bookmark application. Can include subdomains, paths, or both.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#domain AccessBookmark#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#id AccessBookmark#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The image URL for the logo shown in the app launcher dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#logo_url AccessBookmark#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * Name of the bookmark application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#name AccessBookmark#name}
  */
  readonly name: string;
  /**
  * The zone identifier to target for the resource. Conflicts with `account_id`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#zone_id AccessBookmark#zone_id}
  */
  readonly zoneId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark cloudflare_access_bookmark}
*/
export class AccessBookmark extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_access_bookmark";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark cloudflare_access_bookmark} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessBookmarkConfig
  */
  public constructor(scope: Construct, id: string, config: AccessBookmarkConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_access_bookmark',
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
    this._appLauncherVisible = config.appLauncherVisible;
    this._domain = config.domain;
    this._id = config.id;
    this._logoUrl = config.logoUrl;
    this._name = config.name;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
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

  // app_launcher_visible - computed: false, optional: true, required: false
  private _appLauncherVisible?: boolean | cdktf.IResolvable; 
  public get appLauncherVisible() {
    return this.getBooleanAttribute('app_launcher_visible');
  }
  public set appLauncherVisible(value: boolean | cdktf.IResolvable) {
    this._appLauncherVisible = value;
  }
  public resetAppLauncherVisible() {
    this._appLauncherVisible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLauncherVisibleInput() {
    return this._appLauncherVisible;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // logo_url - computed: false, optional: true, required: false
  private _logoUrl?: string; 
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }
  public set logoUrl(value: string) {
    this._logoUrl = value;
  }
  public resetLogoUrl() {
    this._logoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUrlInput() {
    return this._logoUrl;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      app_launcher_visible: cdktf.booleanToTerraform(this._appLauncherVisible),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      logo_url: cdktf.stringToTerraform(this._logoUrl),
      name: cdktf.stringToTerraform(this._name),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
