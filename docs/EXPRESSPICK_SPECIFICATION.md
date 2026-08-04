1. PROJECT OVERVIEW
ExpressPick is a multi-supermarket digital shopping and order-pickup platform. Multiple independent supermarkets can
join one centralized ExpressPick ecosystem.
Customers use one Customer Website to discover approved supermarkets, select a supermarket, browse its products,
place an order, pay, track preparation status, and collect the order.
Each supermarket is an independent tenant. Its products, inventory, workers, administrators, orders, and operational
information must be isolated from every other supermarket.
ExpressPick is the platform operator. It has a central Owner Dashboard for reviewing supermarkets, verifying
businesses, approving or rejecting applications, monitoring the platform, and managing platform-level operations.
The system must be designed for many supermarkets from the beginning. Do not hard-code the application around one
supermarket.
2. THE FOUR APPLICATIONS
ExpressPick consists of four separate interactive web applications. They may share reusable code, types, utilities,
authentication helpers, and UI components, but each application has a distinct responsibility and permission boundary.
Customer Website: The public shopping application. Customers browse approved supermarkets and shop within a
selected supermarket.
Supermarket Admin Dashboard: A supermarket-specific management application. Each administrator manages only the
supermarket they are authorized to manage.
Universal Worker Portal: One shared worker application for all supermarkets. Workers use the same portal, but
authentication and supermarket membership determine which supermarket's orders and data they can access.
ExpressPick Owner Dashboard: The central platform management application. ExpressPick Owners review and
approve supermarkets, monitor the platform, and access platform-wide operational and financial information according
to Owner permissions.
3. MULTI-SUPERMARKET ARCHITECTURE
Each approved supermarket is a tenant with an internal database UUID and a unique public Supermarket ID.
The internal UUID is used for database relationships. The public Supermarket ID is used for human-readable
identification and onboarding.
Supermarket ID is not a password, secret, or authentication mechanism.
Every supermarket-owned record must be associated with the correct supermarket where applicable, including
products, inventory, workers, orders, and financial records.
Tenant isolation must be enforced at the database and security layer, not only by hiding records in the frontend.
A user belonging to Supermarket A must not be able to read or modify private data belonging to Supermarket B, even
by manipulating frontend requests.

4. USERS, ROLES, AND ACCESS
Primary roles are CUSTOMER, SUPERMARKET_ADMIN, WORKER, and OWNER.
Customers manage their own accounts and orders.
Supermarket administrators manage only their own supermarket.
Workers process orders only for their authorized supermarket.
Owners manage the entire ExpressPick platform.
Roles must be enforced through authentication, authorization, membership relationships, and Supabase Row Level
Security. Frontend route protection alone is not sufficient.
An authenticated user must not automatically gain access to every supermarket. Access must come from an authorized
membership or Owner-level platform permission.
5. SUPERMARKET REGISTRATION
A supermarket must apply before it can appear as an active supermarket on the Customer Website.
The application should collect business name, supermarket/brand name, business type, business description,
registration information where applicable, official business email, phone number, authorized representative, country,
state, city, and full business address.
The application should collect the supermarket logo, store profile image, store photographs, and other evidence
requested by ExpressPick.
The application should collect verification documents demonstrating that the supermarket is a legitimate operating
business.
The application must collect business settlement information required for payment settlement, including business
account name, bank, account number, and any additional information required by the payment provider.
Banking and verification information is sensitive and must not be publicly exposed.
Applications begin in a pending state and are not automatically activated.
6. OWNER VERIFICATION AND APPROVAL
The ExpressPick Owner reviews business information, documents, store images, and settlement information.
The Owner may approve the supermarket, reject the application, request additional information, or suspend an
approved supermarket.
Suggested statuses are PENDING, UNDER_REVIEW, MORE_INFORMATION_REQUIRED, APPROVED,
REJECTED, and SUSPENDED.
Only approved and active supermarkets are visible as shopping destinations.
When approved, the supermarket receives its unique Supermarket ID and becomes eligible to operate.
Approval actions should be recorded in audit logs.
7. SUPERMARKET ADMIN DASHBOARD
Each approved supermarket has its own administrative dashboard.
The administrator can view dashboard statistics, manage products and categories, manage inventory, view supermarket
orders, manage workers, and manage store profile information.
Administrators must only see and manage records belonging to their authorized supermarket.
Financial views must distinguish product sales from the supermarket's share of ExpressPick service fees.

8. UNIVERSAL WORKER PORTAL
There is one universal Worker Portal for all supermarkets. Workers do not receive separate worker websites for each
supermarket.
A worker logs in through the universal portal. The system identifies the authenticated user and retrieves the worker's
active supermarket membership.
The worker then sees only the operational dashboard for the supermarket to which the worker is authorized.
If John works for Kilimanjaro, John uses the same Worker Portal as every other worker but sees Kilimanjaro's
authorized orders. If John is not a member of Market Square, he cannot access Market Square's orders.
The supermarket administrator invites a worker using the worker's name and email. The invitation is associated with the
correct supermarket.
The worker receives a secure activation process and sets their own password. The administrator must never see or
store the worker's password.
Workers may view authorized orders, view order details, prepare orders, update permitted statuses, verify pickup OTPs,
and complete pickups. They must not access another supermarket's private data.
9. CUSTOMER SHOPPING FLOW
Customers can create accounts and authenticate through the supported customer authentication flow.
Customers browse approved and active supermarkets and select one supermarket before browsing its products.
Customers can search, filter, view product details, choose quantities, and add products to a cart.
An order belongs to one supermarket in the initial architecture. Do not combine products from multiple supermarkets
into one order.
The backend calculates the product total and applicable ExpressPick service fee.
The customer pays the final amount.
After trusted payment verification, the order enters the preparation workflow.
10. SERVICE FEE RULES
For 1–2 items, the service fee is ■100.
For 3 or more items, the service fee is ■200.
The service fee is separate from the normal product/goods price.
The service fee must be calculated or validated by trusted backend logic.
The client must never be trusted to determine authoritative prices or fees.
11. EXPRESSPICK REVENUE MODEL — CORE BUSINESS RULE
ExpressPick does not take a commission from the supermarket's product/goods price.
100% of the normal product/goods price belongs to the supermarket that owns and fulfills the order.
ExpressPick charges the customer a separate service fee.
The service fee is divided 50/50 between ExpressPick and the supermarket that fulfills the order.
For a ■100 service fee, ■50 belongs to ExpressPick and ■50 belongs to the supermarket.
For a ■200 service fee, ■100 belongs to ExpressPick and ■100 belongs to the supermarket.
The supermarket receives its full product revenue plus its 50% service-fee share. ExpressPick receives its 50%
service-fee share.

Example: Products ■10,000 + service fee ■100 = customer pays ■10,100. Supermarket share is ■10,050. ExpressPick
share is ■50.
Example: Products ■20,000 + service fee ■200 = customer pays ■20,200. Supermarket share is ■20,100. ExpressPick
share is ■100.
These values must be stored as explicit financial records so every order can be reconciled.
12. SUPERMARKET BANKING AND SETTLEMENT
Every supermarket provides its business bank/settlement details during registration.
ExpressPick maintains its own business bank/settlement account for ExpressPick's share of service-fee revenue.
Each approved supermarket must have a verified settlement destination associated with its supermarket record before it
can receive settlements.
The database must distinguish between bank information collected during onboarding and a payment-provider
settlement destination or recipient record where required.
Sensitive bank information must not be exposed to customers or unauthorized workers.
Every financial transaction must identify the supermarket that is owed money.
The exact settlement mechanism must use the payment provider's supported capabilities. Do not invent unsupported
split-payment behavior.
The financial model must remain correct whether settlement is performed by automatic split settlement or another
supported controlled settlement process.
13. PAYMENT DATA AND LIFECYCLE
For every order/payment, the system should determine product total, service fee, total customer payment, supermarket
product revenue, supermarket service-fee share, ExpressPick service-fee share, payment status, provider transaction
reference, settlement status, and settlement/transfer references where applicable.
The customer creates an order. The backend calculates totals. Payment is initialized. The customer pays. The payment
is verified through trusted server-side verification and/or webhook. Only then is payment marked successful.
Only after successful payment verification should the pickup OTP be generated.
Settlement records must track the supermarket's economic share and ExpressPick's economic share separately.
Refunds, reversals, failed payments, cancellations, and duplicate webhook events must be handled without corrupting
financial records.
Financial calculations must use safe monetary representations. Prefer smallest currency units such as kobo for
authoritative amounts, or a precisely defined database numeric policy. Do not use unreliable floating-point arithmetic for
authoritative money calculations.
Do not trust customer-supplied totals. Recalculate or validate from server-side prices, quantities, service-fee rules, and
the correct supermarket.
14. ORDER LIFECYCLE
The standard order lifecycle is PENDING, PREPARING, READY_FOR_PICKUP, and COMPLETED.
PENDING means the order has been created and is awaiting preparation.
PREPARING means an authorized worker has started preparation.
READY_FOR_PICKUP means preparation is complete and the customer can collect the order.
COMPLETED means pickup has been successfully verified.
Order status transitions must be authorized and auditable.

15. OTP PICKUP
The pickup OTP is generated only after successful payment verification.
The OTP is associated with the correct order, has an expiration policy, and cannot be reused after successful
verification.
Only an authorized worker for the correct supermarket may verify the OTP.
After successful OTP verification, the order may become COMPLETED.
Invalid or expired OTPs must not complete the order.
16. REALTIME ORDER TRACKING
Supabase Realtime should provide live order status updates.
Customers should receive updates when an order moves to PREPARING, READY_FOR_PICKUP, and COMPLETED
without manually refreshing.
Realtime subscriptions must respect authorization and must not leak another customer's private order information.
17. OWNER DASHBOARD
The Owner Dashboard manages supermarket applications, verification, approval, rejection, suspension, reactivation,
and platform monitoring.
The Owner can view platform-wide supermarkets, customers, workers, orders, payments, revenue, and settlements
according to Owner permissions.
Financial reporting should distinguish gross customer payments, product revenue owed to supermarkets, supermarket
service-fee shares, ExpressPick service-fee revenue, payment costs where applicable, refunds, and settled amounts.
Owner-only controls must never be available to supermarket administrators or workers.
18. DATABASE CORE ENTITIES
Core conceptual entities should include profiles, supermarkets, supermarket_applications, supermarket_documents,
supermarket_memberships, supermarket_payment_accounts or settlement destinations, categories, products,
inventory, orders, order_items, payments, payment_settlements, otp_records, notifications, and audit_logs.
Supabase Auth manages authentication identities. profiles stores application-level user information linked to the
authenticated user's UUID.
Supermarkets store tenant identity and approval status. Applications store verification workflow. Documents store
uploaded evidence references. Memberships connect users to supermarkets and roles.
Products belong to one supermarket. Inventory belongs to the appropriate product/supermarket relationship.
Orders belong to one customer and one supermarket. Order items preserve the product price snapshot used at
purchase time.
Payments belong to orders. Settlement records track the supermarket and ExpressPick financial allocations. OTP
records belong to orders.
19. AUTHENTICATION AND SECURITY
Use Supabase Auth for authentication. Do not build a custom password storage system.
Passwords must never be stored as plain text.
Never expose Supabase service-role credentials or payment secret keys in frontend applications.
Use environment variables for secrets.
Use server-side validation for critical operations.

Use database constraints and RLS for tenant isolation.
Payment success must be verified through trusted mechanisms.
Payment webhooks must be securely validated and duplicate processing must be prevented.
Protect private verification documents and financial information.
Audit important administrative, financial, and security actions.
20. ROW LEVEL SECURITY
RLS is mandatory for sensitive multi-tenant data.
A Kilimanjaro worker may access only records authorized for Kilimanjaro.
A Kilimanjaro administrator may manage only Kilimanjaro.
An Owner may access platform-wide information according to Owner permissions.
A customer may access only their own private account and orders.
Public supermarket and product information should be intentionally exposed only where appropriate.
RLS policies must be based on authenticated identity and membership relationships, not frontend route names.
Test at least two supermarkets with different users and roles before production.
21. SUPABASE STORAGE
Use Supabase Storage for supermarket logos, store images, verification documents, and product images.
Public assets may use appropriate public or signed access.
Sensitive verification documents must be private and protected by storage policies.
Uploads must validate file type, size, and safe handling requirements.
22. AUDIT LOGGING
Log important actions such as supermarket application submission, review, approval, rejection, information requests,
suspension, reactivation, worker invitation, worker activation/deactivation, product changes, price changes, order status
changes, payment verification, refunds, OTP verification, and settlement events.
Audit records should identify actor, action, target entity, timestamp, and relevant metadata.
Do not store passwords, secret keys, or unnecessary sensitive credentials in audit logs.
23. TECHNOLOGY STACK
Frontend: React + TypeScript + Vite.
Database: Supabase PostgreSQL.
Authentication: Supabase Auth.
Storage: Supabase Storage.
Realtime: Supabase Realtime.
Payments: Paystack, using only supported APIs and settlement capabilities.
Repository: GitHub.
Development: GitHub Codespaces.
AI assistance: GitHub Copilot.
Deployment: Vercel or another suitable production hosting platform.

Shared code may include common types, validation schemas, Supabase clients, utilities, and reusable UI components.
24. FILE STRUCTURE PRINCIPLE
The existing four-application structure remains the foundation: Customer Website, Supermarket Admin Dashboard,
Universal Worker Portal, and Owner Dashboard.
The payment model does not require a fifth website.
Payment, database, authentication, shared types, and backend/server functionality should be implemented in the
appropriate existing shared or backend-oriented parts of the repository.
Do not duplicate authoritative payment calculations separately in all four applications.
The Customer Website initiates the customer-facing payment experience.
The Supermarket Admin Dashboard displays supermarket-specific orders and financial information.
The Worker Portal handles operational order actions and pickup verification.
The Owner Dashboard displays platform-wide operational and financial information.
25. COMPLETE END-TO-END FLOW
A supermarket applies with business information, brand information, location, logo, store images, verification
documents, authorized contact information, and business settlement/bank details.
The application is PENDING. The Owner reviews it and may request more information, reject it, or approve it.
After approval, the supermarket receives a unique Supermarket ID and becomes ACTIVE.
The supermarket administrator accesses the Admin Dashboard, manages products and inventory, and invites workers.
Workers activate accounts, set their own passwords, and use the universal Worker Portal. Their membership
determines which supermarket they can access.
A customer selects an approved supermarket, browses products, creates an order, and pays.
The backend calculates product total and service fee. Payment is verified.
The system records 100% product revenue for the supermarket, 50% service-fee share for the supermarket, and 50%
service-fee share for ExpressPick.
After successful payment verification, the system generates the pickup OTP.
A worker prepares the order and moves it to PREPARING, then READY_FOR_PICKUP.
The customer receives realtime status updates.
The customer arrives at the selected supermarket. An authorized worker verifies the OTP.
If valid, the order becomes COMPLETED.
Financial settlement records are updated according to the supported payment-provider settlement process.
26. DEVELOPMENT ORDER
1. Inspect the existing manually created repository and all files.
2. Compare the repository against this specification before writing application code.
3. Configure the root project, package manager, TypeScript, Vite applications, and shared packages without
unnecessarily recreating or deleting the user's existing structure.
4. Create and configure the Supabase project.
5. Finalize the database schema based on this specification and the actual repository.
6. Create version-controlled database migrations in dependency order.

7. Configure Supabase Auth.
8. Create and test RLS policies.
9. Configure Supabase Storage and storage policies.
10. Implement the Owner Dashboard and supermarket application workflow.
11. Implement approval and Supermarket ID generation.
12. Implement the Supermarket Admin Dashboard.
13. Implement products, categories, and inventory.
14. Implement worker invitations and secure password setup.
15. Implement the Universal Worker Portal and tenant-aware worker access.
16. Implement the Customer Website and supermarket browsing.
17. Implement cart and service-fee calculation.
18. Implement order creation and server-side financial calculations.
19. Implement Paystack payment initialization and trusted payment verification.
20. Implement payment-provider webhook handling.
21. Implement financial allocation records for product revenue and 50/50 service-fee sharing.
22. Implement supermarket settlement destinations and settlement records.
23. Implement OTP generation and secure pickup verification.
24. Implement worker order processing.
25. Implement Realtime order tracking.
26. Implement notifications.
27. Implement audit logging.
28. Test cross-supermarket data isolation.
29. Test payments, duplicate webhooks, refunds, and settlement accounting.
30. Test OTP expiration, invalid OTPs, and reuse prevention.
31. Test realtime updates.
32. Perform security and authorization testing.
33. Deploy and perform production verification.
27. NON-NEGOTIABLE RULES FOR COPILOT
Do not build ExpressPick as a single-supermarket application.
Do not create separate worker portals for every supermarket.
Do not use Supermarket ID as a password.
Do not allow a worker to access another supermarket's orders.
Do not allow a supermarket administrator to access another supermarket's private data.
Do not allow an unapproved supermarket to appear as an active shopping destination.
Do not take commission from product/goods prices.
100% of product revenue belongs to the supermarket.
Service fee is split 50/50 between ExpressPick and the fulfilling supermarket.

■100 service fee means ■50 ExpressPick and ■50 supermarket.
■200 service fee means ■100 ExpressPick and ■100 supermarket.
Every supermarket has its own business settlement/bank details.
ExpressPick has its own business settlement/bank account.
Payment information must be protected.
Payment success must be trusted only after server-side/provider verification.
OTP must only be generated after successful payment verification.
Financial records must be traceable to orders and payment references.
Frontend logic alone must never enforce security.
RLS must enforce multi-supermarket isolation.
Never store passwords as plain text.
Never expose payment secrets or Supabase service-role credentials in frontend code.
Do not change these business rules without explicit approval from the project owner.
28. COPILOT WORKING INSTRUCTIONS
Before changing code, read docs/EXPRESSPICK_SPECIFICATION.md completely.
Before creating or modifying database tables, inspect the existing repository and compare the schema against this
specification.
Do not create duplicate tables or duplicate authentication systems.
Do not delete, rename, or move the manually created project structure unless explicitly approved.
When a requirement is ambiguous, explain the ambiguity before making a destructive or architectural change.
For security-sensitive code, prioritize server-side validation, RLS, authorization, webhook verification, and auditability.
When implementing a feature, explain which files are changed, why they are changed, what the code does, and how it
connects to ExpressPick.
Build incrementally and test each major subsystem before moving to the next.
A feature is complete only when its UI, backend logic, database rules, authorization, error handling, and relevant tests
work together.
Test multi-supermarket features using at least two different supermarkets.
Use clear TypeScript types and shared schemas to prevent inconsistent data structures across the four applications.
29. FINAL SYSTEM DEFINITION
ExpressPick is a secure multi-tenant platform connecting customers with multiple approved supermarkets.
The Customer Website is where customers shop.
The Supermarket Admin Dashboard is where each supermarket manages its own business operations.
The Universal Worker Portal is where workers process orders for their authorized supermarket.
The ExpressPick Owner Dashboard is where the platform owner controls supermarket verification and platform-wide
management.
Supabase provides database, authentication, storage, and realtime infrastructure.
Paystack provides payment processing according to its supported capabilities.
Every supermarket has its own identity, verification evidence, workers, products, orders, and settlement destination.

Every order belongs to one supermarket.
Every supermarket is isolated from every other supermarket.
100% of product revenue belongs to the supermarket.
The service fee is split 50/50 between ExpressPick and the supermarket.
The system must scale from a small number of supermarkets to many supermarkets without changing the core
architecture.
The goal is a secure, maintainable, production-ready multi-supermarket platform, not a prototype