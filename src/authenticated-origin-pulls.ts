// https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticatedOriginPullsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls#authenticated_origin_pulls_certificate AuthenticatedOriginPulls#authenticated_origin_pulls_certificate}
  */
  readonly authenticatedOriginPullsCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls#enabled AuthenticatedOriginPulls#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls#hostname AuthenticatedOriginPulls#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls#zone_id AuthenticatedOriginPulls#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls cloudflare_authenticated_origin_pulls}
*/
export class AuthenticatedOriginPulls extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_authenticated_origin_pulls";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls cloudflare_authenticated_origin_pulls} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticatedOriginPullsConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticatedOriginPullsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_authenticated_origin_pulls',
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
    this._authenticatedOriginPullsCertificate = config.authenticatedOriginPullsCertificate;
    this._enabled = config.enabled;
    this._hostname = config.hostname;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authenticated_origin_pulls_certificate - computed: false, optional: true, required: false
  private _authenticatedOriginPullsCertificate?: string; 
  public get authenticatedOriginPullsCertificate() {
    return this.getStringAttribute('authenticated_origin_pulls_certificate');
  }
  public set authenticatedOriginPullsCertificate(value: string) {
    this._authenticatedOriginPullsCertificate = value;
  }
  public resetAuthenticatedOriginPullsCertificate() {
    this._authenticatedOriginPullsCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatedOriginPullsCertificateInput() {
    return this._authenticatedOriginPullsCertificate;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
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
      authenticated_origin_pulls_certificate: cdktf.stringToTerraform(this._authenticatedOriginPullsCertificate),
      enabled: cdktf.booleanToTerraform(this._enabled),
      hostname: cdktf.stringToTerraform(this._hostname),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}