import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AppInterceptor implements HttpInterceptor{

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
		//hice un clone de la peticion y le agreguè cabecera
		let peticionClonada:HttpRequest<any> = req.clone({headers:req.headers.append("Authorization","bearer "+token)})

		console.log("Peticion clonada");
		console.log(req);
		
		

		//que continúe la peticion
		return next.handle(peticionClonada)
	}

}