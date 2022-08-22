import { Button } from '@twilio-paste/core';
import { useEffect, useState } from 'react';
import { Card, Label, HelpText, Input } from '@twilio-paste/core';
import { useCallback } from 'react';

const Identity = () => {

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    window.analytics.page();
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    console.log(firstName + " " + lastName + " " + email);
    // Need to generate an ID here
    await window.analytics.identify(email, {
      firstName: firstName,
      lastName: lastName,
      email: email,
    }, []);

    await window.analytics.track('Sign Up', {
      customer: `${firstName} ${lastName}`,
      SSN: "123-45-6789",
      id: "123"
    });
    event.target.reset();
  }, [email, firstName, lastName]);

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="first_name" required>First Name</Label>
          <Input 
            aria-describedby="first_name_help_text" 
            id="first_name" 
            name="first_name" 
            type="text" 
            placeholder="John" 
            onChange={(e) => setFirstName(e.target.value)} 
            required
          />
          <HelpText id="first_name_text">Your First Name</HelpText>
          
          <Label htmlFor="last_name" required>Last Name</Label>
          <Input 
            aria-describedby="last_name_help_text" 
            id="last_name" 
            name="last_name" 
            type="text" 
            placeholder="Doe" 
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <HelpText id="last_name_text">Your Last Name</HelpText>

          <Label htmlFor="email" required>Email</Label>
          <Input 
            aria-describedby="email_help_text" 
            id="email" 
            name="email" 
            type="email" 
            placeholder="example@gmail.com" 
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <HelpText marginTop='10px' id="last_name_text">Your Email</HelpText>
          <br/>
          <Button 
            type="submit" 
            disabled={(!!firstName && !!lastName && !!email) === false}
          >
            Submit
          </Button>
        </form>
      </Card>
    </>
  );
}

export default Identity;