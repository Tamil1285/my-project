    import React, { useState } from "react";
    import { Form, Button } from "react-bootstrap";
    import "./ProfileInformation.css";

    const ProfileInformation = () => {
        const [validated, setValidated] = useState(false);
        const [formData, setFormData] = useState({
            fullName: "",
            mobileNumber: "",
            email: "",
            gender: "",
        });

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.id]: e.target.value });
        };

        const handleGenderChange = (e) => {
            setFormData({ ...formData, gender: e.target.value });
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            event.stopPropagation();
            
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                setValidated(true);
                return;
            }

            setValidated(true);
            alert("Profile Updated Successfully!");
        };

        return (
            <>
                <h4>Personal Information</h4>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {/* Full Name Field */}
                    <Form.Group className="mb-2">
                        <Form.Label htmlFor="fullName">Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            id="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="profile-input"
                            pattern="^[A-Za-z ]+$"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Only alphabets and spaces are allowed.
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Mobile Number Field */}
                    <Form.Group className="mb-2">
                        <Form.Label htmlFor="mobileNumber">Mobile Number</Form.Label>
                        <Form.Control
                            type="text"
                            id="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            className="profile-input"
                            pattern="^[0-9]{10}$"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid 10-digit mobile number.
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Gender Field */}
                    <Form.Group className="mb-2">
                        <Form.Label>Your Gender</Form.Label>
                        <div>
                            <Form.Check
                                inline
                                type="radio"
                                label="Male"
                                name="gender"
                                value="Male"
                                id="male"
                                checked={formData.gender === "Male"}
                                onChange={handleGenderChange}
                                required
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Female"
                                name="gender"
                                value="Female"
                                id="female"
                                checked={formData.gender === "Female"}
                                onChange={handleGenderChange}
                                required
                            />
                        </div>
                        {validated && !formData.gender && (
                            <div className="text-danger">Please select your gender.</div>
                        )}
                    </Form.Group>

                    {/* Email Field */}
                    <h4>Email Address</h4>
                    <Form.Group className="mb-2">
                        <Form.Control
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="profile-input"
                            pattern="^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid email address (e.g., example@gmail.com).
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Submit Button */}
                    <Button type="submit" variant="primary" className="mt-2" size="sm">
                        Save Changes
                    </Button>
                </Form>
            </>
        );
    };

    export default ProfileInformation;
