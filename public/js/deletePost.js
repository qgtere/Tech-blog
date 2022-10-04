const DeletePostFormHandler = async (event) => {
    event.preventDefault();
    
    const id = document.querySelector('#post-id');
    
    const response = await fetch("/api/post/" + id.value, {
        method: "DELETE"
    });

    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert('Failed to delete post');
    }

};

document
    .querySelector('#btnDelete')
        .addEventListener('click', DeletePostFormHandler);