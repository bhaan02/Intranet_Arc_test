
export const showLoginPopup = (callback, url) => {

    const popup = window.open("http://localhost:3000/auth/microsoft", 
            "targetWondow" , 
            `toolbar = no, 
            location= no, 
            status = no, 
            menubar = no, 
            scrollbars = yes, 
            resizable = yes, 
            width = 620,
            height = 700`
            )
            window.addEventListener("message", (event) => {
                if (event.origin === "http://localhost:3000") {
                    if (event.data) {
                        sessionStorage.setItem("user", JSON.stringify(event.data));
                        popup.close();
                        callback(url)
                    }
                }
            });
}