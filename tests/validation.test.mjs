import test from'node:test';import assert from'node:assert/strict';import{validate}from'../netlify/lib/validation.mjs';
const valid={kind:'quote',company:'Test Builder',contact:'Test Person',email:'test@example.com',phone:'01642 000000',postcode:'TS3 8TE',product:'bifold-doors',service:'Supply only',details:'Fictional project for demonstration only',demoConsent:'yes'};
test('valid test enquiry is sanitised and marked as demo',()=>{const r=validate({...valid,company:' Test Builder '});assert.deepEqual(r.errors,{});assert.equal(r.clean.company,'Test Builder');assert.equal(r.clean.demo,true)});
test('invalid fields rejected',()=>{const r=validate({...valid,email:'bad',postcode:'bad',phone:'bad',product:'invented',service:'invented',demoConsent:''});for(const k of ['email','postcode','phone','product','service','demoConsent'])assert.ok(r.errors[k])});
test('malicious shapes and oversized content rejected',()=>{assert.ok(validate(null).errors.body);assert.ok(validate({...valid,company:{nested:true},details:'x'.repeat(4001)}).errors.company)});
test('account needs business type and products',()=>{assert.ok(validate({...valid,kind:'account'}).errors.businessType);assert.deepEqual(validate({...valid,kind:'account',businessType:'Builder',products:'Bifold doors'}).errors,{})});

