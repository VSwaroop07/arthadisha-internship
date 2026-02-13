using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArthaDisha_Training_C_
{
    internal class Task5
    {
        public interface IOrderService
        {
            Task<Order> CreateOrderAsync(OrderDto dto);
        }
        public class OrderService : IOrderService
        {
            private readonly AppDbContext _context;

            public OrderService(AppDbContext context)
            {
                _context = context;
            }

            public async Task<Order> CreateOrderAsync(OrderDto dto)
            {
                if (dto.Amount > 10000)
                {
                    dto.Discount = 0.1;
                }

                var order = new Order
                {
                    Amount = dto.Amount,
                    Discount = dto.Discount
                };

                _context.Orders.Add(order);
                await _context.SaveChangesAsync();

                return order;
            }
        }

    }
}
