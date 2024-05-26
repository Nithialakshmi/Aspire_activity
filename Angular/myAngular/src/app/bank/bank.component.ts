import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AccountHolder} from './bank.model';

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css'
})
export class BankComponent {
  accountInput:string="SavingsAccount";

  holders:AccountHolder[]=[{accountNumber:23456765,accountHolderName:"Nithialakshmi",typeOfAccount:"SavingsAccount",
    balance:50000,bankName:"SBI"},
  {accountNumber:23456765,accountHolderName:"Kamal",typeOfAccount:"SavingsAccount",
  balance:45000,bankName:"SBI"},
  {accountNumber:435788856,accountHolderName:"Preethi",typeOfAccount:"BusinessAccount",
  balance:75000,bankName:"HDFC"},
  {accountNumber:456898709,accountHolderName:"Prakash",typeOfAccount:"SavingsAccount",
  balance:95000,bankName:"ICICI"},
  {accountNumber:897654564,accountHolderName:"Pavithra",typeOfAccount:"SalaryAccount",
  balance:82000,bankName:"SBI"},
  {accountNumber:446668687,accountHolderName:"Priya",typeOfAccount:"BusinessAccount",
  balance:64000,bankName:"ICICI"},
  {accountNumber:546898795,accountHolderName:"Jayamala",typeOfAccount:"SalaryAccount",
  balance:50000,bankName:"SBI"},
  {accountNumber:452567835,accountHolderName:"ShriRam",typeOfAccount:"SalaryAccount",
  balance:72000,bankName:"HDFC"},
  ];

  getStatus(balance: number): string {
    switch (true) {
      case (balance >= 10000 && balance < 20000):
        return "Inactive";
      case (balance >= 20000 && balance<= 60000):
        return "Active";
      case (balance > 60000):
        return "Loyal";
      default:
        return "Unknown";
    }
  }
}
