// https://www.terraform.io/docs/providers/cloudflare/r/rate_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RateLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#bypass_url_patterns RateLimit#bypass_url_patterns}
  */
  readonly bypassUrlPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#description RateLimit#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#disabled RateLimit#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#period RateLimit#period}
  */
  readonly period: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#threshold RateLimit#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#zone_id RateLimit#zone_id}
  */
  readonly zoneId: string;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#action RateLimit#action}
  */
  readonly action: RateLimitAction;
  /**
  * correlate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#correlate RateLimit#correlate}
  */
  readonly correlate?: RateLimitCorrelate;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#match RateLimit#match}
  */
  readonly match?: RateLimitMatch;
}
export interface RateLimitActionResponse {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#body RateLimit#body}
  */
  readonly body: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#content_type RateLimit#content_type}
  */
  readonly contentType: string;
}

export function rateLimitActionResponseToTerraform(struct?: RateLimitActionResponseOutputReference | RateLimitActionResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    content_type: cdktf.stringToTerraform(struct!.contentType),
  }
}

export class RateLimitActionResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimitActionResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimitActionResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._contentType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._contentType = value.contentType;
    }
  }

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }
}
export interface RateLimitAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#mode RateLimit#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#timeout RateLimit#timeout}
  */
  readonly timeout?: number;
  /**
  * response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#response RateLimit#response}
  */
  readonly response?: RateLimitActionResponse;
}

export function rateLimitActionToTerraform(struct?: RateLimitActionOutputReference | RateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    response: rateLimitActionResponseToTerraform(struct!.response),
  }
}

export class RateLimitActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimitAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimitAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._timeout = undefined;
      this._response.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._timeout = value.timeout;
      this._response.internalValue = value.response;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // response - computed: false, optional: true, required: false
  private _response = new RateLimitActionResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: RateLimitActionResponse) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}
export interface RateLimitCorrelate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#by RateLimit#by}
  */
  readonly by?: string;
}

export function rateLimitCorrelateToTerraform(struct?: RateLimitCorrelateOutputReference | RateLimitCorrelate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    by: cdktf.stringToTerraform(struct!.by),
  }
}

export class RateLimitCorrelateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimitCorrelate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._by !== undefined) {
      hasAnyValues = true;
      internalValueResult.by = this._by;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimitCorrelate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._by = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._by = value.by;
    }
  }

  // by - computed: false, optional: true, required: false
  private _by?: string; 
  public get by() {
    return this.getStringAttribute('by');
  }
  public set by(value: string) {
    this._by = value;
  }
  public resetBy() {
    this._by = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byInput() {
    return this._by;
  }
}
export interface RateLimitMatchRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#methods RateLimit#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#schemes RateLimit#schemes}
  */
  readonly schemes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#url_pattern RateLimit#url_pattern}
  */
  readonly urlPattern?: string;
}

export function rateLimitMatchRequestToTerraform(struct?: RateLimitMatchRequestOutputReference | RateLimitMatchRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.methods),
    schemes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.schemes),
    url_pattern: cdktf.stringToTerraform(struct!.urlPattern),
  }
}

export class RateLimitMatchRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimitMatchRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._schemes !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemes = this._schemes;
    }
    if (this._urlPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPattern = this._urlPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimitMatchRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._methods = undefined;
      this._schemes = undefined;
      this._urlPattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._methods = value.methods;
      this._schemes = value.schemes;
      this._urlPattern = value.urlPattern;
    }
  }

  // methods - computed: true, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return cdktf.Fn.tolist(this.getListAttribute('methods'));
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // schemes - computed: true, optional: true, required: false
  private _schemes?: string[]; 
  public get schemes() {
    return cdktf.Fn.tolist(this.getListAttribute('schemes'));
  }
  public set schemes(value: string[]) {
    this._schemes = value;
  }
  public resetSchemes() {
    this._schemes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemesInput() {
    return this._schemes;
  }

  // url_pattern - computed: true, optional: true, required: false
  private _urlPattern?: string; 
  public get urlPattern() {
    return this.getStringAttribute('url_pattern');
  }
  public set urlPattern(value: string) {
    this._urlPattern = value;
  }
  public resetUrlPattern() {
    this._urlPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPatternInput() {
    return this._urlPattern;
  }
}
export interface RateLimitMatchResponse {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#headers RateLimit#headers}
  */
  readonly headers?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#origin_traffic RateLimit#origin_traffic}
  */
  readonly originTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#statuses RateLimit#statuses}
  */
  readonly statuses?: number[];
}

export function rateLimitMatchResponseToTerraform(struct?: RateLimitMatchResponseOutputReference | RateLimitMatchResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.headers),
    origin_traffic: cdktf.booleanToTerraform(struct!.originTraffic),
    statuses: cdktf.listMapper(cdktf.numberToTerraform)(struct!.statuses),
  }
}

export class RateLimitMatchResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimitMatchResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._originTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.originTraffic = this._originTraffic;
    }
    if (this._statuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.statuses = this._statuses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimitMatchResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers = undefined;
      this._originTraffic = undefined;
      this._statuses = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers = value.headers;
      this._originTraffic = value.originTraffic;
      this._statuses = value.statuses;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string } | cdktf.IResolvable; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string } | cdktf.IResolvable) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // origin_traffic - computed: true, optional: true, required: false
  private _originTraffic?: boolean | cdktf.IResolvable; 
  public get originTraffic() {
    return this.getBooleanAttribute('origin_traffic');
  }
  public set originTraffic(value: boolean | cdktf.IResolvable) {
    this._originTraffic = value;
  }
  public resetOriginTraffic() {
    this._originTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originTrafficInput() {
    return this._originTraffic;
  }

  // statuses - computed: true, optional: true, required: false
  private _statuses?: number[]; 
  public get statuses() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('statuses')));
  }
  public set statuses(value: number[]) {
    this._statuses = value;
  }
  public resetStatuses() {
    this._statuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusesInput() {
    return this._statuses;
  }
}
export interface RateLimitMatch {
  /**
  * request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#request RateLimit#request}
  */
  readonly request?: RateLimitMatchRequest;
  /**
  * response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit#response RateLimit#response}
  */
  readonly response?: RateLimitMatchResponse;
}

export function rateLimitMatchToTerraform(struct?: RateLimitMatchOutputReference | RateLimitMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request: rateLimitMatchRequestToTerraform(struct!.request),
    response: rateLimitMatchResponseToTerraform(struct!.response),
  }
}

export class RateLimitMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimitMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimitMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._request.internalValue = undefined;
      this._response.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._request.internalValue = value.request;
      this._response.internalValue = value.response;
    }
  }

  // request - computed: false, optional: true, required: false
  private _request = new RateLimitMatchRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: RateLimitMatchRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new RateLimitMatchResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: RateLimitMatchResponse) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit cloudflare_rate_limit}
*/
export class RateLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_rate_limit";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/rate_limit cloudflare_rate_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RateLimitConfig
  */
  public constructor(scope: Construct, id: string, config: RateLimitConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_rate_limit',
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
    this._bypassUrlPatterns = config.bypassUrlPatterns;
    this._description = config.description;
    this._disabled = config.disabled;
    this._period = config.period;
    this._threshold = config.threshold;
    this._zoneId = config.zoneId;
    this._action.internalValue = config.action;
    this._correlate.internalValue = config.correlate;
    this._match.internalValue = config.match;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass_url_patterns - computed: false, optional: true, required: false
  private _bypassUrlPatterns?: string[]; 
  public get bypassUrlPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('bypass_url_patterns'));
  }
  public set bypassUrlPatterns(value: string[]) {
    this._bypassUrlPatterns = value;
  }
  public resetBypassUrlPatterns() {
    this._bypassUrlPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassUrlPatternsInput() {
    return this._bypassUrlPatterns;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
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

  // action - computed: false, optional: false, required: true
  private _action = new RateLimitActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: RateLimitAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // correlate - computed: false, optional: true, required: false
  private _correlate = new RateLimitCorrelateOutputReference(this, "correlate");
  public get correlate() {
    return this._correlate;
  }
  public putCorrelate(value: RateLimitCorrelate) {
    this._correlate.internalValue = value;
  }
  public resetCorrelate() {
    this._correlate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlateInput() {
    return this._correlate.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new RateLimitMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: RateLimitMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypass_url_patterns: cdktf.listMapper(cdktf.stringToTerraform)(this._bypassUrlPatterns),
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      period: cdktf.numberToTerraform(this._period),
      threshold: cdktf.numberToTerraform(this._threshold),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      action: rateLimitActionToTerraform(this._action.internalValue),
      correlate: rateLimitCorrelateToTerraform(this._correlate.internalValue),
      match: rateLimitMatchToTerraform(this._match.internalValue),
    };
  }
}
