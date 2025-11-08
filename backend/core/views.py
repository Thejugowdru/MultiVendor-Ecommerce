from .serializers import ProductRatingSerializer
from .models import ProductRating, OrderItems, Customer
from rest_framework import viewsets
from django.shortcuts import render

from rest_framework import generics, permissions, viewsets
from rest_framework.exceptions import ValidationError

from .serializers import VendorSerializer, ProductSerializer, CustomSerializer, OrderSerializer, OrderItemsSerializer, CustomerAddressSerializer, ProductRatingSerializer
from .models import Vendor, Product, Customer, Order, OrderItems, CustomerAddress, ProductRating
from .pagination import CustomPagination


# Create your views here.
class VendorList(generics.ListCreateAPIView):
    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer
    # permission_classes = [permissions.IsAuthenticated]  # This one is no need when you set project level authentication in the settings.py


class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer
    # permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'id'


class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def perform_create(self, serializer):
        try:
            vendor = Vendor.objects.get(user=self.request.user)
        except Vendor.DoesNotExist:
            raise ValidationError(
                "You must be registered as a vendor to add a product.")
        serializer.save(vendor=vendor)


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'pk'


class CustomerList(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomSerializer


class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = OrderSerializer
    lookup_field = 'id'


class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    # pagination_class = CustomPagination


class OrderDetail(generics.ListCreateAPIView):
    queryset = OrderItems.objects.all()
    serializer_class = OrderItemsSerializer
    lookup_field = 'id'

    def get_queryset(self):
        # order_id = self.kwargs['pk']
        # order = Order.objects.get(id=order_id)
        # order_items = order.order_items.all()
        order_items = Order.objects.get(id=self.kwargs['pk']).order_items.all()
        return order_items


class CustomerAddressView(viewsets.ModelViewSet):
    queryset = CustomerAddress.objects.all()
    serializer_class = CustomerAddressSerializer


class ProductRatingView(viewsets.ModelViewSet):
    queryset = ProductRating.objects.all()
    serializer_class = ProductRatingSerializer


# class ProductRatingView(viewsets.ModelViewSet):
#     queryset = ProductRating.objects.all()
#     serializer_class = ProductRatingSerializer

#     def perform_create(self, serializer):
#         customer = serializer.validated_data.get("customer")
#         product = serializer.validated_data.get("product")

#         # Ensure both fields provided
#         if not customer or not product:
#             raise ValidationError("Customer and Product are required fields.")

#         # Check if the customer actually purchased this product
#         has_purchased = OrderItems.objects.filter(
#             order__customer=customer,
#             product=product
#         ).exists()

#         if not has_purchased:
#             raise ValidationError(
#                 "You can rate only products you have purchased.")

#         # Prevent duplicate rating
#         already_rated = ProductRating.objects.filter(
#             customer=customer,
#             product=product
#         ).exists()

#         if already_rated:
#             raise ValidationError("You have already rated this product.")

#         # Save rating
#         serializer.save()
