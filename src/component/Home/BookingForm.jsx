import '../../components.css';

import React,{useState,useEffect,useCallback} from "react";

function BookingForm({availableTimes,fetchTimesForSelectedDate }){
    const[guest,setGuest]=useState(0);
    function updateGuest(e){
        setGuest(parseInt(e.target.value));
    }

    const [isFormValid, setIsFormValid] = useState(false);

    const[date,setDate]=useState("");
        function updateDate(e){
        const newDate = e.target.value;
        setDate(newDate);
        fetchTimesForSelectedDate(newDate);
        console.log(`[BookingForm] Date changed to ${newDate}. New times requested.`);
    }

     useEffect(() => {
        if (availableTimes && availableTimes.length > 0) {
            setTime("");
        } else {
            setTime("");
        }
    }, [availableTimes]);

    const[time,setTime]=useState("");
    function updateTime(e){
        setTime(e.target.value);
    }

    const[occasion,setOccasion]=useState("Select the event");
    function updateOccasion(e){
        setOccasion(e.target.value);
    }

    const[special,setSpecial]=useState("");
    function updateSpecial(e){
        setSpecial(e.target.value);
    }

    const resetForm = () => {
        setGuest(0);
        setDate("");
        setTime("");
        setOccasion("Select the event");
        setSpecial("");
    };

    const validateForm = useCallback(() => {
        const isValidDate = date !== "";
        const isValidTime = time !== "";
        const isValidGuest = guest >= 1 && guest <= 10;
        const isValidOccasion = occasion !== "Select the event";
        setIsFormValid(isValidDate && isValidTime && isValidGuest && isValidOccasion);
    }, [date, time, guest, occasion]);

    useEffect(() => {
        validateForm();
    }, [date, time, guest, occasion, validateForm]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookingDetails = { date, time, guest, occasion };
        console.log("[BookingForm] Submitting:", bookingDetails);

        try {
            const success = window.submitAPI(bookingDetails);
            if (success) {
                alert("Reservation submitted successfully!");
                resetForm();
            } else {
                alert("Failed to submit reservation. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting reservation:", error);
            alert("An error occurred during submission. Please try again.");
        }
    };

    return(
        <div className='box'>
            <form onSubmit={handleSubmit} className='login-form1'>
                <h1>Welcome!</h1>
                <div className='dandt'>
                    <div className='date'>
                        <label htmlFor='res-date'>Choose Date</label>
                        <div>
                        <input type="date" id="res-date" value={date} onChange={updateDate} required></input>
                        </div>
                    </div>
                    <div className='time'>
                        <label htmlFor="res-time">Choose Time</label>
                        <div>
                        <select id="res-time" onChange={updateTime} value={time} required>
                            <option value="" disabled>Select the time</option>
                            {availableTimes && availableTimes.length > 0 ? (
                                availableTimes.map((availableTime) => (
                                    <option key={availableTime} value={availableTime}>{availableTime}</option>
                                ))
                            ) : (
                                <option value="" disabled>No times available</option>
                            )}
                        </select>
                        </div>
                    </div>
                </div>
                <div className='gu'>
                    <label htmlFor='guests' required>Number of Diners</label>
                    <div>
                    <input type="number" id="guests" placeholder="1" min={1} max={10} value={guest} onChange={updateGuest} required></input>
                    </div>
                </div>
                <div className='oc'>
                    <label htmlFor='occasion'>Occasion</label>
                    <div>
                    <select id='occasion' value={occasion} onChange={updateOccasion}>
                        <div className='disable'>
                            <option value="Select the event" disabled >Select the event</option>
                        </div>
                        <option>Birthday</option>
                        <option>Engagement</option>
                        <option>Anniversary</option>
                    </select>
                    </div>
                </div>
                <div className='Sn'>
                    <label htmlFor='Special'>Special Note</label>
                    <div>
                        <textarea id='Special' placeholder={"Add a note..."} onChange={updateSpecial} value={special} ></textarea>
                    </div>
                </div>
                <div>
                    <input className='submit-button' type="submit" value="Make your Reservation" disabled={!isFormValid}  aria-label="On Click"></input>
                </div>
            </form>
        </div>
    );
}

export default BookingForm;