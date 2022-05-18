// https://www.terraform.io/docs/providers/cloudflare/r/firewall_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/firewall_rule#action FirewallRule#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/firewall_rule#description FirewallRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/firewall_rule#filter_id FirewallRule#filter_id}
  */
  readonly filterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/firewall_rule#paused FirewallRule#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/firewall_rule#priority FirewallRule#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/firewall_rule#products FirewallRule#products}
  */
  readonly products?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/firewall_rule#zone_id FirewallRule#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/firewall_rule cloudflare_firewall_rule}
*/
export class FirewallRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_firewall_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/firewall_rule cloudflare_firewall_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallRuleConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_firewall_rule',
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
    this._action = config.action;
    this._description = config.description;
    this._filterId = config.filterId;
    this._paused = config.paused;
    this._priority = config.priority;
    this._products = config.products;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // filter_id - computed: false, optional: false, required: true
  private _filterId?: string; 
  public get filterId() {
    return this.getStringAttribute('filter_id');
  }
  public set filterId(value: string) {
    this._filterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIdInput() {
    return this._filterId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // products - computed: false, optional: true, required: false
  private _products?: string[]; 
  public get products() {
    return cdktf.Fn.tolist(this.getListAttribute('products'));
  }
  public set products(value: string[]) {
    this._products = value;
  }
  public resetProducts() {
    this._products = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsInput() {
    return this._products;
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
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      filter_id: cdktf.stringToTerraform(this._filterId),
      paused: cdktf.booleanToTerraform(this._paused),
      priority: cdktf.numberToTerraform(this._priority),
      products: cdktf.listMapper(cdktf.stringToTerraform)(this._products),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
