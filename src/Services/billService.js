export async function getBills(content) {
    const response = await fetch("http://localhost:8080/api/bills", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return await response.json();
}
export async function deleteBill(id) {
    const response = await fetch(`http://localhost:8080/api/bills/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return await response.json();
}
export async function getBill(id) {
    const response = await fetch(`http://localhost:8080/api/bills/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return await response.json();
}
export async function editBill(id, content) {
    const response = await fetch(`http://localhost:8080/api/bills/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(content)
    });
    return await response.json();
}

export async function addBill(content) {
    const response = await fetch(`http://localhost:8080/api/bills`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(content)
    });
    return await response.json();
}

export async function addUser(content) {
    const response = await fetch(`http://localhost:8080/api/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(content)
    });
    return await response.json();
}