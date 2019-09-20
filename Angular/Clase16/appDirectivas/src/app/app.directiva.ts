import { Directive, ElementRef, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
	selector:"[mi-directiva]"
})

export class AppDirectiva {
	@Input() colorOriginal:string="red"
	@Input() fondoOriginal:string="transparent"
	@Input() colorHover:string="green"
	@Input() fondoHover:string="yellow"

	constructor(private ref:ElementRef){}

	@HostBinding("style.font-size") tamanoLetra = "25px"

	ngOnInit(){
		this.ref.nativeElement.style.color = this.colorOriginal
		this.ref.nativeElement.style.backgroundColor=this.fondoOriginal
	}

	@HostListener("mouseenter") entrar(){
		this.ref.nativeElement.style.color = this.colorHover
		this.ref.nativeElement.style.backgroundColor = this.fondoHover
		//this.tamanoLetra = "30px"
	}

	@HostListener("mouseleave") salir(){
		this.ref.nativeElement.style.color = this.colorOriginal
		this.ref.nativeElement.style.backgroundColor = this.fondoOriginal
		this.tamanoLetra = "25px"
	}

	@HostListener("click") seleccionado(){
		this.entrar()
	}
}