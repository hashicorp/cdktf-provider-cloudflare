// https://www.terraform.io/docs/providers/cloudflare/r/zone_cache_variants
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneCacheVariantsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/zone_cache_variants#avif ZoneCacheVariants#avif}
  */
  readonly avif?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/zone_cache_variants#bmp ZoneCacheVariants#bmp}
  */
  readonly bmp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/zone_cache_variants#gif ZoneCacheVariants#gif}
  */
  readonly gif?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/zone_cache_variants#id ZoneCacheVariants#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/zone_cache_variants#jp2 ZoneCacheVariants#jp2}
  */
  readonly jp2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/zone_cache_variants#jpeg ZoneCacheVariants#jpeg}
  */
  readonly jpeg?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/zone_cache_variants#jpg ZoneCacheVariants#jpg}
  */
  readonly jpg?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/zone_cache_variants#jpg2 ZoneCacheVariants#jpg2}
  */
  readonly jpg2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/zone_cache_variants#png ZoneCacheVariants#png}
  */
  readonly png?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/zone_cache_variants#tif ZoneCacheVariants#tif}
  */
  readonly tif?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/zone_cache_variants#tiff ZoneCacheVariants#tiff}
  */
  readonly tiff?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/zone_cache_variants#webp ZoneCacheVariants#webp}
  */
  readonly webp?: string[];
  /**
  * The zone identifier to target for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/zone_cache_variants#zone_id ZoneCacheVariants#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/zone_cache_variants cloudflare_zone_cache_variants}
*/
export class ZoneCacheVariants extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zone_cache_variants";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/zone_cache_variants cloudflare_zone_cache_variants} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneCacheVariantsConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneCacheVariantsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zone_cache_variants',
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
    this._avif = config.avif;
    this._bmp = config.bmp;
    this._gif = config.gif;
    this._id = config.id;
    this._jp2 = config.jp2;
    this._jpeg = config.jpeg;
    this._jpg = config.jpg;
    this._jpg2 = config.jpg2;
    this._png = config.png;
    this._tif = config.tif;
    this._tiff = config.tiff;
    this._webp = config.webp;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avif - computed: false, optional: true, required: false
  private _avif?: string[]; 
  public get avif() {
    return cdktf.Fn.tolist(this.getListAttribute('avif'));
  }
  public set avif(value: string[]) {
    this._avif = value;
  }
  public resetAvif() {
    this._avif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avifInput() {
    return this._avif;
  }

  // bmp - computed: false, optional: true, required: false
  private _bmp?: string[]; 
  public get bmp() {
    return cdktf.Fn.tolist(this.getListAttribute('bmp'));
  }
  public set bmp(value: string[]) {
    this._bmp = value;
  }
  public resetBmp() {
    this._bmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmpInput() {
    return this._bmp;
  }

  // gif - computed: false, optional: true, required: false
  private _gif?: string[]; 
  public get gif() {
    return cdktf.Fn.tolist(this.getListAttribute('gif'));
  }
  public set gif(value: string[]) {
    this._gif = value;
  }
  public resetGif() {
    this._gif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gifInput() {
    return this._gif;
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

  // jp2 - computed: false, optional: true, required: false
  private _jp2?: string[]; 
  public get jp2() {
    return cdktf.Fn.tolist(this.getListAttribute('jp2'));
  }
  public set jp2(value: string[]) {
    this._jp2 = value;
  }
  public resetJp2() {
    this._jp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jp2Input() {
    return this._jp2;
  }

  // jpeg - computed: false, optional: true, required: false
  private _jpeg?: string[]; 
  public get jpeg() {
    return cdktf.Fn.tolist(this.getListAttribute('jpeg'));
  }
  public set jpeg(value: string[]) {
    this._jpeg = value;
  }
  public resetJpeg() {
    this._jpeg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jpegInput() {
    return this._jpeg;
  }

  // jpg - computed: false, optional: true, required: false
  private _jpg?: string[]; 
  public get jpg() {
    return cdktf.Fn.tolist(this.getListAttribute('jpg'));
  }
  public set jpg(value: string[]) {
    this._jpg = value;
  }
  public resetJpg() {
    this._jpg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jpgInput() {
    return this._jpg;
  }

  // jpg2 - computed: false, optional: true, required: false
  private _jpg2?: string[]; 
  public get jpg2() {
    return cdktf.Fn.tolist(this.getListAttribute('jpg2'));
  }
  public set jpg2(value: string[]) {
    this._jpg2 = value;
  }
  public resetJpg2() {
    this._jpg2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jpg2Input() {
    return this._jpg2;
  }

  // png - computed: false, optional: true, required: false
  private _png?: string[]; 
  public get png() {
    return cdktf.Fn.tolist(this.getListAttribute('png'));
  }
  public set png(value: string[]) {
    this._png = value;
  }
  public resetPng() {
    this._png = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pngInput() {
    return this._png;
  }

  // tif - computed: false, optional: true, required: false
  private _tif?: string[]; 
  public get tif() {
    return cdktf.Fn.tolist(this.getListAttribute('tif'));
  }
  public set tif(value: string[]) {
    this._tif = value;
  }
  public resetTif() {
    this._tif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tifInput() {
    return this._tif;
  }

  // tiff - computed: false, optional: true, required: false
  private _tiff?: string[]; 
  public get tiff() {
    return cdktf.Fn.tolist(this.getListAttribute('tiff'));
  }
  public set tiff(value: string[]) {
    this._tiff = value;
  }
  public resetTiff() {
    this._tiff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tiffInput() {
    return this._tiff;
  }

  // webp - computed: false, optional: true, required: false
  private _webp?: string[]; 
  public get webp() {
    return cdktf.Fn.tolist(this.getListAttribute('webp'));
  }
  public set webp(value: string[]) {
    this._webp = value;
  }
  public resetWebp() {
    this._webp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webpInput() {
    return this._webp;
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
      avif: cdktf.listMapper(cdktf.stringToTerraform, false)(this._avif),
      bmp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bmp),
      gif: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gif),
      id: cdktf.stringToTerraform(this._id),
      jp2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jp2),
      jpeg: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jpeg),
      jpg: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jpg),
      jpg2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jpg2),
      png: cdktf.listMapper(cdktf.stringToTerraform, false)(this._png),
      tif: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tif),
      tiff: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tiff),
      webp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webp),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
