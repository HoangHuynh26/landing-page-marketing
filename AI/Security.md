The project is frontend-only.

The purpose of this document is to define security requirements AND strict change-control rules that every AI coding agent must follow.

---

# 1. Frontend Security

Cover the following areas:

1. Input validation
2. Input sanitization
3. XSS prevention
4. Unsafe HTML
5. URL handling
6. External links
7. Form security
8. Personal information handling
9. Sensitive information
10. Local storage
11. Browser storage
12. Third-party libraries
13. Dependency security
14. Environment variables
15. Client-side secrets
16. Content Security Policy considerations
17. iframe security
18. External images
19. External scripts
20. Analytics
21. Error handling
22. Logging
23. Booking data
24. Future API integration

Important security rules:

* Never store secret API keys in frontend source code.
* Never expose private credentials.
* Never trust client-side validation as server-side security.
* Never store sensitive personal information unnecessarily.
* Never use `dangerouslySetInnerHTML` unless absolutely necessary and properly sanitized.
* Never expose internal application errors to users.
* Never log personal information unnecessarily.
* Never hard-code secrets into source code.
* Do not introduce insecure third-party dependencies.
* Do not add external scripts without approval.
* Do not send user information to external services without explicit approval.

---

# 2. Strict Change Control Policy

This project is controlled by the user.

The AI coding agent MUST NOT make changes outside the explicitly approved scope.

The AI must treat the user's approval as mandatory before modifying project files.

## 2.1 No Unauthorized Code Changes

Before modifying any source-code file, the AI MUST ask the user for permission.

The AI MUST NOT automatically modify:

* `.js`
* `.jsx`
* `.ts`
* `.tsx`
* `.css`
* `.scss`
* `.html`
* `.json`
* Configuration files
* Environment files
* Package files
* Routing files
* Component files
* Utility files
* Hook files
* Data files

unless the user has explicitly approved the requested change.

---

# 3. Security.md Modification Rule

When the user asks the AI to update security rules, the AI may modify:

`AI/Security.md`

ONLY.

The AI MUST NOT modify:

* React source code
* Components
* Pages
* CSS
* Configuration
* Package files
* Other Markdown files
* Task files
* Architecture files
* Design files
* Requirement files

unless the user explicitly approves those changes.

---

# 4. No Automatic Scope Expansion

The AI MUST NOT expand the scope of a requested change.

For example:

If the user asks:

"Update Security.md to prevent unauthorized code changes."

The AI must ONLY update `Security.md`.

It must NOT:

* Change React components
* Refactor the project
* Change architecture
* Change styling
* Install packages
* Update dependencies
* Modify routes
* Change configuration
* Create additional files

---

# 5. Mandatory Approval Before Related Changes

If the AI determines that another file must be changed to complete a requested task, it MUST STOP.

The AI must explain:

1. Which file needs to be changed
2. Why the file needs to be changed
3. What exact change is proposed
4. What potential impact the change may have

Then ask the user for explicit approval.

The AI MUST NOT make the change until approval is received.

Example:

"To implement this security requirement, I need to modify `src/components/Booking.jsx`.

Reason:
...

Proposed change:
...

Impact:
...

Do you approve this change?"

Do not proceed until the user explicitly approves.

---

# 6. No Git Push

The AI is strictly prohibited from pushing code or changes to any remote Git repository.

The AI MUST NOT execute:

```bash
git push
```

or any equivalent command.

The AI MUST NOT:

* Push to GitHub
* Push to GitLab
* Push to Bitbucket
* Create remote branches
* Update remote branches
* Force push
* Push tags
* Automatically synchronize changes with a remote repository

The user must manually perform all remote Git operations.

---

# 7. Git Restrictions

The AI may inspect Git status when necessary.

The AI may inspect:

```bash
git status
git diff
git log
```

when required for analysis.

However, the AI must NOT automatically push changes.

The AI must also avoid destructive Git operations.

Do not automatically execute:

```bash
git reset --hard
git clean -fd
git checkout -- .
git restore .
git push --force
```

unless the user explicitly requests the specific operation.

---

# 8. No Automatic Commit

The AI MUST NOT automatically create Git commits unless the user explicitly asks it to create a commit.

If a commit would be useful, the AI may recommend it.

Example:

"The changes are ready. You may review them and create a commit."

Do not create the commit automatically.

---

# 9. User Approval Protocol

Before making any potentially destructive, broad, or cross-file modification, the AI must ask for approval.

Approval is required when:

* More than one file must be changed
* Existing functionality must be removed
* Existing components must be significantly refactored
* Dependencies must be installed
* Dependencies must be removed
* Configuration must change
* Environment variables must change
* Routes must change
* Database-related code would be introduced
* External services would be introduced
* Security-sensitive behavior would change

The AI may perform analysis without approval.

The AI may inspect files without approval.

The AI may explain proposed changes without approval.

The AI may NOT execute the modification until approval is explicitly provided.

---

# 10. Minimal Change Principle

When approval has been given, make the smallest possible change necessary to satisfy the approved request.

Do not modify unrelated code.

Do not perform opportunistic refactoring.

Do not "clean up" unrelated files.

Do not rename unrelated files.

Do not change existing architecture without approval.

Do not change the visual design without approval.

Do not change dependencies without approval.

Do not rewrite working code simply because another implementation may be preferred.

---

# 11. File Scope Declaration

Before making an approved modification, the AI should clearly identify the intended scope.

Example:

```text
Approved modification scope:

AI/Security.md
```

or:

```text
Approved modification scope:

src/components/Booking.jsx
src/components/BookingCalendar.jsx
```

The AI must not modify files outside this declared scope.

If additional files become necessary during implementation, STOP and request approval.

---

# 12. No Hidden Changes

The AI must not make hidden or indirect changes.

Do not:

* Modify files through scripts without disclosure
* Generate temporary modifications that remain in the project
* Automatically modify configuration
* Automatically modify package-lock files
* Automatically install packages
* Automatically update dependencies
* Automatically format unrelated files
* Automatically rename files

All modifications must be visible and explainable.

---

# 13. Dependency Policy

Do not install a new dependency without user approval.

Before requesting approval, provide:

* Package name
* Reason
* What functionality it provides
* Why the existing stack cannot provide the functionality
* Potential risks
* Whether it is required or optional

Wait for user approval.

---

# 14. Environment and Secrets

Never modify environment files automatically.

Do not create or modify:

```text
.env
.env.local
.env.production
.env.development
```

without explicit user approval.

Never request that the user place secret credentials directly into React source code.

Never expose private credentials through frontend environment variables.

---

# 15. External Services

Before introducing:

* Analytics
* Tracking
* Booking services
* Email services
* CRM integrations
* Marketing pixels
* External APIs
* Third-party scripts

the AI MUST ask for user approval.

Explain:

* Service
* Purpose
* Data collected
* Where data is sent
* Security implications
* Required files
* Required dependencies

Do not implement the integration before approval.

---

# 16. Backend Boundary

This project is frontend-only.

The AI MUST NOT create backend functionality automatically.

Do not create:

* Express server
* API server
* Database
* Authentication server
* Backend booking system
* Server-side user storage

If a backend becomes necessary, STOP and ask the user for approval before making architectural changes.

---

# 17. Booking Data Security

The current booking flow is frontend-only.

The AI must not claim that booking information is securely stored on a server.

Until a backend is explicitly approved and implemented:

* Booking data should remain local to the frontend flow.
* Do not send personal information to external services.
* Do not persist personal information unnecessarily.
* Do not store sensitive information in localStorage unless explicitly approved.

---

# 18. Security Issue Discovered During Development

If the AI discovers a security problem outside the current approved scope:

DO NOT automatically fix it.

Instead report:

```text
Security issue detected.

File:
...

Issue:
...

Risk:
...

Recommended fix:
...

Required changes:
...

Approval required before modification.
```

Then wait for the user's approval.

---

# 19. Conflict Resolution

If another project instruction conflicts with this security policy, prioritize user approval for modifications.

The AI must never interpret a general task instruction as permission to modify unrelated files.

For example:

"Improve the landing page"

does NOT mean:

* Modify Security.md
* Modify Architecture.md
* Install packages
* Refactor the entire project
* Change configuration
* Push code

The AI must stay within the explicitly requested scope.

---

# 20. Required Behavior Before Every Modification

Before modifying files, the AI must internally determine:

1. What did the user explicitly request?
2. Which files are directly within scope?
3. Does the change require additional files?
4. Does the change require a dependency?
5. Does the change affect architecture?
6. Does the change affect security?
7. Does the change affect configuration?
8. Does the change require Git operations?

If additional approval is required:

STOP and ask the user.

---

# 21. Final Rule

The user has final authority over project modifications.

The AI is an implementation assistant, not an autonomous project owner.

The AI may:

* Analyze
* Inspect
* Explain
* Recommend
* Plan
* Propose changes

But it must obtain explicit user approval before making changes outside the currently approved scope.

The AI must NEVER:

* Push code automatically
* Make unauthorized cross-file changes
* Install dependencies without approval
* Modify environment files without approval
* Introduce external services without approval
* Make destructive Git operations
* Expand task scope without approval
* Fix unrelated issues without approval
