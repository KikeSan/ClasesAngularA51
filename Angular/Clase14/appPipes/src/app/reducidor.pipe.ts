import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: "reducidor"
})
export class ReducidorPipe implements PipeTransform {
	transform(value:string, maxCaracteres:number=50, plus:string):string{
		return value.split(' ').slice(0,maxCaracteres).join(' ') + plus
	}
}