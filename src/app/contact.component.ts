import{Component, OnInit} from '@angular/core';
import {Contact} from './contact';
import { stringify } from 'querystring';


@component
(
    {
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.css']
    }
)

export class ContactComponent implements OnInit
{
    contact: Contact;
    contacts: Contact[];
    d: string;
    isDisplay: boolean;
    isDisplay1: boolean;
    isDisplay2: boolean;


    constructor()
    {
        this.isDisplay=false;
        this.isDisplay1=false;
        this.isDisplay2= false;
        this.contacts=[];
        this.contact=new Contact();

        var con,con1, con2, con3;
        con= new Contact();
        con1= new Contact();
        con2=new Contact();
        con3=new Contact();


        con.firstname="Eric";
        con.lastname="Elliot";
        con.phone="222-333-5674";

        con1.firstname="Steve";
        con1.lastname="Jobs";
        con1.phone="220-454-6754";

        con2.firstname="Fred";
        con2.lastname="Allen";
        con2.phone="343-878-8766";

        con3.firstname="Steve";
        con3.lastname="Wozniak";
        con3.phone="567-786-3456";

        this.contacts.push(con);
        this.contacts.push(con1);
        this.contacts.push(con2);
        this.contacts.push(con3);
    }
    
    
    ngOnInit(): void
    {
        display()
        {
            this.isDisplay=!this.isDisplay;
        }

        createContact(f:string, l:string, p:string)
        {
            console.log(f);
            for(let i=0; i<this.contacts.length; i++)
            {
                this.contact=new Contact();
                this.contact.firstname=f;
                this.contact.lastname=l;
                this.contact.phone=p;
            }
        }

        deleteContact(p:string)
        {
            this.contacts=this.contacts.filter(c=>c.phone!=p);
        }

        updateContact(f:string, l:string, p:string )
        {
            this.isDisplay2=!this.isDisplay2;
            for(let i=0; i<this.contacts.length; i++)
            {
                if(this.contacts[i].firstname==f && this.contacts[i].lastname==l)
                {
                    this.contacts[i].phone=p;
                }
            }
        }

        searchLastName(l:string)
        {
            this.isDisplay1=!this.isDisplay1;
            this.contact=new Contact();
            this.contact=this.contacts.find(c=>c.lastname==l);
        }

        sortDesc()
        {
            this.contacts.sort((a,b)=>(a.lastname < b.lastname) ? 1:-1);
        }
    } 
}