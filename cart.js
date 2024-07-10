
let items = []; // Initialize as an empty array
     items.forEach((item, index) => {
        
      

// Your code here
     });

     const pizza = [
      { size: "small", id: 1, price: 10 },
      { size: "medium", id: 2, price: 15 },
      { size: "large", id: 3, price: 20 },
    ];
    
    

     let cart = { small: [] };

     const itemsArray = Array.from(items);
     itemsArray.forEach((item, index) => {
         // Use item and index within the loop
     });

  
     function addToCart(size, id, price) {
      // Add pizza to cart (create array if it doesn't exist)
      if (!cart[size]) {
          cart[size] = [];
      }
      cart[size].push({ id, price });
      updateTotals(size, price, 1); // Update totals (add quantity)
  }

  function removeFromCart(size, id) {
      // Find pizza index in cart array
      const index = cart[size].findIndex(pizza => pizza.id === id);
      if (index > -1) {
          const price = cart[size][index].price;
          cart[size].splice(index, 1); // Remove pizza from cart
          updateTotals(size, price, -1); // Update totals (subtract quantity)
      }
  }

  function updateTotals(size, price, quantity) {
      // Update totals based on size and quantity changes
      switch (size) {
          case 'small':
              totalSmall += price * quantity;
              break;
          case 'medium':
              totalMedium += price * quantity;
              break;
          case 'large':
              totalLarge += price * quantity;
              break;
      }
      totalPrice = totalSmall + totalMedium + totalLarge; // Update total price
  }

  function checkout() {
    function checkout() {
        // Show checkout modal, clear payment info
        checkoutModal = true;
        paymentAmount = 0;
        paymentMessage = '';
        paymentSuccess = false;
    }

    function processPayment() {
        // Check if payment is enough
        if (paymentAmount >= totalPrice) {
            paymentMessage = "Enjoy your pizzas!";
            paymentSuccess = true;
            cart = {}; // Clear cart after successful payment
        } else {
            paymentMessage = "Sorry - that is not enough money!";
            paymentSuccess = false;
        }

        // Hide message after a while (add a short delay using setTimeout)
        setTimeout(() => {
            paymentMessage = '';
        }, 2000); // Hide message after 2 seconds (adjust as needed)
    }}

  



