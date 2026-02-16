using AutoMapper;
using ProductApi.DTOs;
using ProductApi.Entities;

namespace ProductApi.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Product, ProductReadDto>();
            CreateMap<ProductCreateDto, Product>();
        }
    }
}
