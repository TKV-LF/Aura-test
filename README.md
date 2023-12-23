# Restaurant Booking

## Backend
This repository contains the backend implementation for managing bookings in a restaurant. The backend is developed using Express.js and MongoDB to provide a RESTful API.


## Environment Variables

To run this project, you need to set the following environment variable in your `.env` file:

- `DATABASE_URL`: mongodb+srv://thuongkhung68:thuongkhung120@cluster0.zlcs6

## Running the Project

1. Install dependencies: `npm install`
2. Set up your `.env` file with the `DATABASE_URL`.
3. Start the server: `npm start`


## Endpoints

### Base URL: `http://*url*/api/booking`

#### 1. POST `/create`

- **Description**: Creates a new booking entry.
- **Request**: Requires a JSON body with booking details.
- **Example**:
    ```http
    POST http://url/api/booking/create
    Content-Type: application/json

    {
        "name": "John Doe",
        "email": "johndoe@mail.com",
        "phone": "09231727272",
        "note": "Some note",
        "adults": "1",
        "kids": "0",
        "bookingDate": "2023-12-25",
        "bookingTime": "12:20"
        // Other booking details
    }
    ```
- **Response**: Returns the created booking object.

#### 2. GET `/getAll`

- **Description**: Retrieves all bookings.
- **Response**: Returns an array of all booking objects.

#### 3. GET `/getOne/:id`

- **Description**: Retrieves a specific booking by ID.
- **Request**: Requires the ID of the booking in the URL.
- **Response**: Returns the booking object with the specified ID.

#### 4. PATCH `/update/:id`

- **Description**: Updates a specific booking by ID.
- **Request**: Requires the ID of the booking in the URL and a JSON body with updated booking details.
- **Example**:
    ```http
    PATCH http://url/api/booking/update/123456789
    Content-Type: application/json

    {
        "tableNumber": 6,
        "customerName": "Jane Smith",
        "bookingTime": "2023-12-25T19:00:00Z"
        // Other updated booking details
    }
    ```
- **Response**: Returns the updated booking object.

#### 5. PATCH `/updateStatus/:id`

- **Description**: Updates the status of a specific booking by ID.
- **Request**: Requires the ID of the booking in the URL and a JSON body with the new status.
- **Example**:
    ```http
    PATCH http://url/api/booking/updateStatus/123456789
    Content-Type: application/json

    {
        "status": "cancelled"
        // New status value
    }
    ```
- **Response**: Returns the updated booking object with the new status.

#### 6. DELETE `/delete/:id`

- **Description**: Deletes a specific booking by ID.
- **Request**: Requires the ID of the booking in the URL.
- **Response**: Returns a success message upon successful deletion.