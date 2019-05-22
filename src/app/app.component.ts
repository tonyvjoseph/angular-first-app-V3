import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //'app-root' is an html tag existing in index.html
  templateUrl: './app.component.html',
  
  // template:`<div style="text-align:center">
  //           <h1>
  //             Welcome to {{ title }}!
  //           </h1>
  //         </div>`,

  //template: '<h1>  Welcome to {{ title }}! </h1>', ////single quotes can use for single line html code

  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-first-app | Employee details';
  titleImagePath='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASMAAACtCAMAAADMM+kDAAAA8FBMVEX///8AeszDDi7dAzAAdMolgs+lw+YAbcibveQAdcsAd8vdAC4fhdDv9/xyrt7bAzCOvuXCACPcACb0uMPcACLCACXCACnsusP74ObGFzhUntnAAB3fCTnbACO62fDcg4/++PrqgJDvxcz98PP40Niv0+3d7fiZw+fp9Pr1193P5PTvmqnwobDzq7f85+v+8/U7k9XbABnkR2PhlKDZdYTmpK6lzOrSUWXpa4DOOVLWZHZ+teHpdIjfGD/gIkjkm6bJKEU6j9PrfI7hLk/F3vHPSFzqb4bmVW/jPFoAZsbceolgpdvnTGhGmtftjZ7UWm7W/wX+AAAMC0lEQVR4nO2deVubShTGQ5b2BmIUQjCKUcxijZrEfanVaqPV2zT2+3+bC1ngDMwMAxnqM955/2vDIr9n5vDOmTNDLiclJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJZW9Dv55P2X+cA6fy3z6XHwv/cvnCUgaHL08n/UcDlf6VFTeS585/PkkDfrXd6ZR162r742lL/YRGQ1r3+4NQysU8vl8vZ7/ejFY7nofj1Fnd2Q0XUCFKSNXur5xvu4sccUPxqj3NtLmgHxG+bzlYeo4aS/6kRgNDl8N0wcEGE0x2Tc7KSP4h2HUrl2vnkBAKCMPk61ffU8Tmj4Go3bt25ZphAiFGXkRXK+niOAfgJHT2oVBiMZoimnj63r7/8Wo8/ZaMHGACIymEfzhV8v5vzBqHJ4WmhqBEInRDFOCCC4wo3b/BReEAml1IiQPk/V8xhaaRGXk1K4LVEAuovtniwLJe9HZVywRXEhGTuvHXQwgV+ZbT6cy8iK4bcVHcPEYOR3XS5OiNGxGzUHuD623zeVG8PMWFZNojBqHv4mvMVTN61xu3Y5nNPfglKGKUIwGcVEaYdRyw/oNPSIBTBY52SQOo3b/+s5gBVQoGKfeSd9jI5Kvej1PGKoIw+goCSBXZs07a7DB2JBmmPT8uSMwozczASA3Yr/OHnaHKSIFlG6EbkfNRIzMo9lpvUSI8vU/IjOqGYma0f0isnxlj0geo3ORGbUSMWru+ucxWKRA+pnIjAbkoSumGa32/BNjBiSo7JrIjHKFBIw8/7gQm49cMGoJzWjEzkjTwKM6DwkaktXD3FkcRr/ZA5Lx4oATv7M3JGsDZyLFYfSN/eVvIFGlze4jrZuh0IzYTaQ2cpAzd5hf/9Yz7s7iMOozM1r4x4UazO0IayEFYsRsIrW7cDbonLUh6TgLKRCjzhbji83cDZ/aYm1INs5CCsSoccfGSCtEqmmcK0azjbWQAjEa3rMxgv5xIVYfaXfEZpQ7ZWNkYp5zyDggsbEFXQIxemEK2qh/XOiCrSFhLaRIjH4wmUjgHwdBixowDUjwFlIkRocsBsmY5x89HV0FJzP5yPpV9K5iMaqdMDBqAv84AiNUpnwkNsMmFCOWLJs2CiJKy7R3grNZfKS+g7mtUIxYTKT5Fhx/3bRuAsfdYYja9nfRGQ3iDZJ2F/SuhqFZ9kVwOoOPtNdFZ9R+jWXU/BYc/mYW3CDs+P9m8JE2LsMmFKN4g6Rpwdu+PdIK7ts8SEg6N7ENyca++oVidB3HyHgJDu43vTo2OJBn8JGO8Ix24xiZYEjqNTo0+RrrI60b8RkdxjAyXoO+0inM1ovAV1XcvDY+wyYWo1qM0T4B/nHXOzbUNhoxiW39l/iMenRG2laAY+YTpnEYvM9jfCTBHgnFqEE3kdA/Hk1xhjtQJ6YdXUTvKRqjAXUaUtsKkj/Oq7FglNcD0+PQ6yMtvIUUitHwlRa0TeAfW2D9Ghy0rdMtEt5CCsWIaiK1VZB//NkMGFkPwduOno/EZ9gEY/STwgj6x0WNyTwUgzBzQYna1gPhthkyUmfiyIhmIk0QTBZTurNnh5mzNsVH4idp6YzUBOvQMecqj8eTyeT4saQWy5wYHZEZGaeOf9hwEdsXDw+qSM7IPrL+NTEjdbPraZugLtRlJUSocvu0P7/Dyl63quDukpxRjfxea/bBYYuE5fzh4aBtQO5rhAwbjVFxjf2PX6mALqWWj7fDv38pRdtSckY9IiNtBOavT0/MmeypdDsPpoTOiQ2JZCEzYKRWLjFH7I8jgSlFnT/RRDaBfxzsLrSzEOhsPeLrn5BhozL6wv7HA0bl4wP8MV+WZ9QmmUjtjn03CKKPtHB1fp44MXpcMFKP90kHdUMtKTmjIWmqtvmD/SLEfOQGwULyZqRWiIjcloTeK8W6I0KWDeYfY+U84xuS9UBa7sebUThaI6oiN0vBaBc/VQv9Y7wI+UhSho0Xo9ycUXlMPWrlGHa3FIze8IxMUiTBaoj3kYRJ2hxvRsoe/bDtJRn1sX3NeE12FbyPJEzS5jgzUjeR/1zZOzhAwtNTZUlG61hGJ/34M6HwC7aIFpLqs9dQwVDzJfTbzGcXoTNaWXt0RyGlSXfxH/u3ZeTNloIR1kQi/pFJ2MS2TciwJRmvfa4GZ62U0N/mJlqFXW1cnLUt9Xb27+5jyGqnYDRcxUCC+Uc2dXB9DbsMYir2cX8ZMqrgjlArK8EhXf/CRQ/SSlUJG+0UjBzMdLa2Bd7ZvRrUOhREgPORFtE/cGX0CC4Mxh7F7dx2JXqfNOuyT6MByQT+0Tk1DSAdCtbxtTCdjWgh+TI6Bhd+BM2mNC5j0khpGEVNpFYAz9ZClrWvon0JxuRoPpJsIbNjhFghbKItDaPoggikjPYn4p9QRrDQBuMjrWfnrzCCfe029sJpGPUjtWwamL8O5QVQRsi4PpqPJGbY+DJSYMzeL5GztOkZRaZqjd9O8OsR+muIETJVHfGRZAvJl5ECHeN2HKQ0jCL1fib0j6G5pRAjC0bldjj5XydaSL6Mik/w0gebRSqlNIwaoRWj2giUDHVCjSzECF0N8ivUkOpEC8mXUfkWvfjTMY1SGkbDUCbSPAQ/hlcBhhkhUTucj6yTx8VcGSEmcqrtSRk/KZKSUQ5dWKPdgRd2JJMbZoRmY/+gva1OzmTyjUeYcfBBtYQzR2kZoZlI6B+jNe4RRkjURhf+41fSZsEIm4bcW6tgu1wqRoiJ1AwQhZ2IB48wQmb00QVbSD/MlJFSrOJugp06SscIMZEG9I/REvcoIyRq12DUhhW4GTNC0yOB9m+jTiAVI8REIvnHaDFAlBGsj0A3kKJYSO6MFBUPKXcQmWBLxagFGCH5x0Y0JYDpa0jUPgNRm1TnlwkjRSHlLy9Dw7ZUjDqgtTThyk7Msm0MI6S5wHwkdjOW7BiVq2EHMNdeadk8JFLvp933Gr56mEUAGEZ5vTVYnDIYnAdRm2Ihs2CkFCtd/M32l81nu0EEdKnVLSBMghLHyMpvAIH/p0ytZMFIUYuTJ+zdkJaUbn/IU5Ai0oCiiLCMCKpblMnwTBh5WewJdjayuzSjzrXGuhkCMyNLfybVQ2TIaFph08XEpXFglNLuxbr+G7tZdmpGlv1w4dBumBkjr8c9rkXmJA+C31PvV+v0R+Fd6ZdgZG+cxcw9ZcjIa0ularjSZtPvbUvse9w+3GLYkJWFUd06jy3LyZSRh0mpokO4S7+zLbU39OBbfFiKZ2TZVwwVJ1kzcs9TECcQdLYl9xjvXRsxlOIYWfoNLVT/RUaK+hlWDQYeaem96lsv9N1Z6YxcQvRQ/TcZuaYSBqUJN0Zu8H6lhSUqIz02VGfHyI3TkRE+PDUI2jy+C9E+uidTojDS87/YPzPCm1G59GXvOAxJnYA7jnky8qpot0j7kBAZ1et/EhQH8s5DKlXXET2F52WzZOQFbxMfvAmMLJstVPviOk+7GKaFK2iz62szdU6xnhLLyHPVCS/PkVGx4g/RumiaH8bsoCaS5zeh+iNMWMLmRjbO8Iv4KeLI6BYMz7bBZIiKzJbs+6dy/W7W8PA+MoqLMqonCdW+uDFS0fnHvWpFLXtLs8oKunrkicdYBKfB7l2oLYUZ1a2vxBojmvgxqoTGr3vd2/Hm5njtCR393/IZi+DU+4mOT0K1NfpVohLlQPz6mkqvzfbPzKodeWq9wA4HGbmhuuakvCrHeESaEUEE1kNk8T1Ip/YavOIAIztFqPbFk1GJsOIICCZrs/mu6PDQD0s+I906X+bzq3zramPK/MFgLTNG7vhktzAb664uXHW6UO2Lb92IEtOSxvBu2X3nuDdLLq0uF6p98R6L0GLSCoIo029Bd15cSqtJEiAUcZ/v3yQ2pafjpdevJVDt1NTclxlzAoQi/rkRJZLCnmovUuifLaPcsH+f31nyS9kzZZBjU5VJN1SGtLI9ViLVNRkzcp33cqHaV4J9IiqbgehHqsXS5Pby6WDP08H22rjCq87/XZRkLw01UPyx5fL8KHfIxrHW7z0k1J4s7yTJKF6SUbwko3hJRvGSjOIlGcVLMorXJ6X0XlLf+9mlpKSkpKSkpKSkpKSkpKSkpKSkpKSk0us/1751Uhs5YRYAAAAASUVORK5CYII='

  isDisabled=false;

  firstName='Tom';
  lastName='Jose';

  //// A Method
  getFullName(){
    return this.firstName +' '+ this.lastName;
  }

  
  // Class binding example
  cssClassToApply='boldClass colorClass';
  isApplyColorClass=true;
  isApplyBoldClass=true;

  // Class binding using [ngClass] example-1
  addCssUsingNgClass1(){
    let classes={
      colorClass:this.isApplyColorClass,
      boldClass:this.isApplyBoldClass
    };
    return classes;
  }
  // Class binding using [ngClass] example-2
  addCssUsingNgClass2(){
    //return 'boldClass colorClass';
    //OR
    return { boldClass:this.isApplyBoldClass};
  }
    

  // Style binding 
  isBold=true;
  fontSize=20;

  addStyleUsingNgStyle(){
    return { 'font-weight': this.isBold? 'bold':'Normal',
              'font-style':'Italic'};
  }

  //Event Binding
  onClick(){
    console.log("button clicked")
  }

  //// Angular component lifecycle hooks | ngOnChanges, ngOnInit, ngOnDestroy
  userText:string="Simple";
}


