// https://www.terraform.io/docs/providers/cloudflare/r/origin_ca_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OriginCaCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/origin_ca_certificate#csr OriginCaCertificate#csr}
  */
  readonly csr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/origin_ca_certificate#hostnames OriginCaCertificate#hostnames}
  */
  readonly hostnames: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/origin_ca_certificate#request_type OriginCaCertificate#request_type}
  */
  readonly requestType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/origin_ca_certificate#requested_validity OriginCaCertificate#requested_validity}
  */
  readonly requestedValidity?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/origin_ca_certificate cloudflare_origin_ca_certificate}
*/
export class OriginCaCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_origin_ca_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/origin_ca_certificate cloudflare_origin_ca_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OriginCaCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: OriginCaCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_origin_ca_certificate',
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
    this._csr = config.csr;
    this._hostnames = config.hostnames;
    this._requestType = config.requestType;
    this._requestedValidity = config.requestedValidity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // csr - computed: false, optional: true, required: false
  private _csr?: string; 
  public get csr() {
    return this.getStringAttribute('csr');
  }
  public set csr(value: string) {
    this._csr = value;
  }
  public resetCsr() {
    this._csr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrInput() {
    return this._csr;
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // hostnames - computed: false, optional: false, required: true
  private _hostnames?: string[]; 
  public get hostnames() {
    return cdktf.Fn.tolist(this.getListAttribute('hostnames'));
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // request_type - computed: false, optional: false, required: true
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }

  // requested_validity - computed: true, optional: true, required: false
  private _requestedValidity?: number; 
  public get requestedValidity() {
    return this.getNumberAttribute('requested_validity');
  }
  public set requestedValidity(value: number) {
    this._requestedValidity = value;
  }
  public resetRequestedValidity() {
    this._requestedValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedValidityInput() {
    return this._requestedValidity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      csr: cdktf.stringToTerraform(this._csr),
      hostnames: cdktf.listMapper(cdktf.stringToTerraform)(this._hostnames),
      request_type: cdktf.stringToTerraform(this._requestType),
      requested_validity: cdktf.numberToTerraform(this._requestedValidity),
    };
  }
}