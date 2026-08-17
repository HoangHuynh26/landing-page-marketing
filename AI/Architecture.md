Create the `Architecture.md` file defining the frontend architecture for the React.js marketing landing page.

The application is frontend-only.

The architecture must prioritize:

* Maintainability
* Scalability
* Reusability
* Separation of concerns
* Clear component boundaries
* Data-driven UI
* Easy future integration with a backend
* Performance

Define:

1. Overall architecture
2. Application layers
3. Component architecture
4. Page architecture
5. Routing architecture
6. UI component architecture
7. Feature component architecture
8. Data architecture
9. State management architecture
10. Form architecture
11. Booking architecture
12. Validation architecture
13. Animation architecture
14. Image architecture
15. Loading-state architecture
16. Error-state architecture
17. Responsive architecture
18. Accessibility architecture

Recommended conceptual structure:

src/
├── components/
├── pages/
├── features/
├── data/
├── hooks/
├── utils/
├── assets/
├── styles/
└── routes/

Adapt this structure to the existing project instead of blindly replacing it.

The architecture should support reusable components such as:

Navbar
Hero
ServiceCard
CaseStudyCard
TestimonialCard
FAQ
CTASection
Calendar
BookingForm
Modal
Button
Card
Input
Skeleton

Marketing data should be separated from UI components where practical.

Services, testimonials, case studies, FAQs, client logos, and booking services should be data-driven.

The booking flow should be implemented as a frontend state machine or equivalent structured state approach.

Booking state should include:

* Current step
* Selected date
* Selected time
* Selected service
* Personal information
* Validation state
* Confirmation state
* Success state

Calendar logic must enforce:

09:00–16:00 valid start times
30-minute intervals
No 16:30 appointment

The architecture must make it possible to connect a real booking API in the future without rewriting the UI.

Do not build the backend.

Explain component responsibilities and boundaries.

Do not write implementation code.
