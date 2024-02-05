const base = "http://api.internship.appointy.com:8000/space-payload/v1";

export const get_payloads = async() => {
    const res = await fetch(`${base}/payloads`, {
        method: 'GET',
        headers: {
            "Content-Type" : "application/json",
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDIzLTA4LTEwVDAwOjAwOjAwWiIsInVzZXJfaWQiOjV9.PjGXMQ8Bv98adDcQPaAmsckKTwfb_ZRKrPXP51DqsKM"
        },
    });
    const ans = await res.json();
    return ans;
}

export const get_durations = async() => {
    const res = await fetch(`${base}/durations`, {
        method: 'GET',
        headers: {
            "Content-Type" : "application/json",
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDIzLTA4LTEwVDAwOjAwOjAwWiIsInVzZXJfaWQiOjV9.PjGXMQ8Bv98adDcQPaAmsckKTwfb_ZRKrPXP51DqsKM"
        },
    });
    const ans = await res.json();
    return ans;
}


export const getBookedSlots = async(obj) => {
    const res = await fetch(`${base}/bookings?payloadId=${obj.payloadId}&startTime=${obj.startTime}&endTime=${obj.endTime}`, {
        method: 'GET',
        headers: {
            "Content-Type" : "application/json",
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDIzLTA4LTEwVDAwOjAwOjAwWiIsInVzZXJfaWQiOjV9.PjGXMQ8Bv98adDcQPaAmsckKTwfb_ZRKrPXP51DqsKM"
        },
    });
    const ans = await res.json();
    return ans;
}