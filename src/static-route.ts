// https://www.terraform.io/docs/providers/cloudflare/r/static_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StaticRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#account_id StaticRoute#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#colo_names StaticRoute#colo_names}
  */
  readonly coloNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#colo_regions StaticRoute#colo_regions}
  */
  readonly coloRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#description StaticRoute#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#nexthop StaticRoute#nexthop}
  */
  readonly nexthop: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#prefix StaticRoute#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#priority StaticRoute#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#weight StaticRoute#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route cloudflare_static_route}
*/
export class StaticRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_static_route";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route cloudflare_static_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StaticRouteConfig
  */
  public constructor(scope: Construct, id: string, config: StaticRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_static_route',
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
    this._coloNames = config.coloNames;
    this._coloRegions = config.coloRegions;
    this._description = config.description;
    this._nexthop = config.nexthop;
    this._prefix = config.prefix;
    this._priority = config.priority;
    this._weight = config.weight;
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

  // colo_names - computed: false, optional: true, required: false
  private _coloNames?: string[]; 
  public get coloNames() {
    return this.getListAttribute('colo_names');
  }
  public set coloNames(value: string[]) {
    this._coloNames = value;
  }
  public resetColoNames() {
    this._coloNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coloNamesInput() {
    return this._coloNames;
  }

  // colo_regions - computed: false, optional: true, required: false
  private _coloRegions?: string[]; 
  public get coloRegions() {
    return this.getListAttribute('colo_regions');
  }
  public set coloRegions(value: string[]) {
    this._coloRegions = value;
  }
  public resetColoRegions() {
    this._coloRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coloRegionsInput() {
    return this._coloRegions;
  }

  // description - computed: false, optional: true, required: false
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // nexthop - computed: false, optional: false, required: true
  private _nexthop?: string; 
  public get nexthop() {
    return this.getStringAttribute('nexthop');
  }
  public set nexthop(value: string) {
    this._nexthop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      colo_names: cdktf.listMapper(cdktf.stringToTerraform)(this._coloNames),
      colo_regions: cdktf.listMapper(cdktf.stringToTerraform)(this._coloRegions),
      description: cdktf.stringToTerraform(this._description),
      nexthop: cdktf.stringToTerraform(this._nexthop),
      prefix: cdktf.stringToTerraform(this._prefix),
      priority: cdktf.numberToTerraform(this._priority),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }
}