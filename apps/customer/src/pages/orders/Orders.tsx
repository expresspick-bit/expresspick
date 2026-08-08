
import Header from "../../components/Header";
import OrderCard from "../../components/OrderCard";
import BottomNavigation from "../../components/BottomNavigation";

export default function Orders() {
  const orders = [
    {
      orderNumber: "EXP100001",
      totalAmount: 6100,
      itemCount: 3,
      status: "Preparing" as const,
      date: "06 Aug 2026",
    },
    {
      orderNumber: "EXP100002",
      totalAmount: 3500,
      itemCount: 2,
      status: "Ready for Pickup" as const,
      date: "04 Aug 2026",
    },
    {
      orderNumber: "EXP100003",
      totalAmount: 9200,
      itemCount: 5,
      status: "Completed" as const,
      date: "01 Aug 2026",
    },
  ];

  return (
    <>
      <Header userName="Customer" />

      <div
        style={{
          padding: "20px",
          paddingBottom: "100px",
        }}
      >
        <h2>My Orders</h2>

        {orders.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              marginTop: "80px",
              color: "#777",
            }}
          >
            <h3>No Orders Yet</h3>
            <p>Your orders will appear here after checkout.</p>
          </div>
        ) : (
          orders.map((order) => (
            <OrderCard
              key={order.orderNumber}
              orderNumber={order.orderNumber}
              totalAmount={order.totalAmount}
              itemCount={order.itemCount}
              status={order.status}
              date={order.date}
              onView={() =>
                alert(`Viewing ${order.orderNumber}`)
              }
            />
          ))
        )}
      </div>

      <BottomNavigation />
    </>
  );
}
