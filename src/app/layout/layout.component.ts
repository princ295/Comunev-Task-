import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl} from '@angular/forms';
import { HttpCallService } from '../http-call.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  sign_up: FormGroup;
  submitted: boolean = false;


  list: any[] =[]
  constructor( private fb: FormBuilder, private src: HttpCallService) { }

  ngOnInit(): void {


      this.src.getCountry().subscribe(res=>{
        res.forEach(element => {
          this.list.push(element.name) 
        });
      })

      this.sign_up = this.fb.group({
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        uname: ['', Validators.required],
        pwd: ['', [Validators.required, Validators.minLength(6)]],
        dob: ['', Validators.required],
        country: ['', Validators.required]
      });
    }

  get f() { return this.sign_up.controls; }

  onSubmit() {
    this.submitted = true;
    
    if(this.sign_up.invalid){
      alert("please fill all input box")
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.sign_up.value))
  }

}


// fname: string;
// lname: string;

// uname: string;
// pwd: string;
// dob: Date;

// country: string; 
// }

