This task implements the complete frontend consultation booking experience.

The booking flow must be:

Step 1:
Select Date and Time

Step 2:
Select Marketing Service

Step 3:
Enter Personal Information

Step 4:
Review and Confirm

Step 5:
Success

Calendar rules:

* Working hours: 09:00–17:00
* Appointment interval: 30 minutes
* Valid appointment start times:
  09:00
  09:30
  10:00
  10:30
  11:00
  11:30
  12:00
  12:30
  13:00
  13:30
  14:00
  14:30
  15:00
  15:30
  16:00
* 16:30 must not be available
* No appointment may start after 16:00

Step 1 must allow:

* Date selection
* Time selection
* Invalid slot prevention

Step 2:

Allow selection of one marketing service.

Example services:

* SEO
* Paid Advertising
* Social Media Marketing
* Content Marketing
* Lead Generation

Step 3:

Collect:

* Full Name
* Email
* Phone Number
* Business Name
* Optional Message

Add proper validation.

Step 4:

Display a complete booking summary.

Allow users to go back and edit previous information.

Step 5:

Show a professional success state.

The current implementation must remain frontend-only.

Use local/mock state.

Do not pretend that a real booking has been stored remotely.

Structure the booking system so that a real API can be connected later.

The booking flow must work on desktop and mobile.

Include:

* Loading state
* Validation state
* Error state
* Empty state where appropriate
* Success state

Define acceptance criteria for every step.

Define edge cases that must be tested.

Do not create backend functionality.
