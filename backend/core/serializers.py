from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Vendor, ProductCategory, Product, Customer, Order, OrderItems, CustomerAddress, ProductRating


# # class VendorSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = Vendor
# #         fields = "__all__"

# #     def __init__(self, *args, **kwargs):
# #         super().__init__(*args, **kwargs)
# #         self.Meta.depth = 1


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id', 'username']


# class VendorSerializer(serializers.ModelSerializer):
#     user = UserSerializer(read_only=True)

#     class Meta:
#         model = Vendor
#         fields = "__all__"


# # class ProductSerializer(serializers.ModelSerializer):
# #     # vendor = VendorSerializer(read_only=True)     # use depth insted of this
# #     class Meta:
# #         model = Product
# #         fields = "__all__"

# #     def __init__(self, *args, **kwargs):
# #         super().__init__(*args, **kwargs)
# #         self.Meta.depth = 1

# class ProductSerializer(serializers.ModelSerializer):
#     category = serializers.PrimaryKeyRelatedField(
#         queryset=ProductCategory.objects.all()
#     )

#     class Meta:
#         model = Product
#         fields = "__all__"
#         depth = 1


# 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    product_ratings = serializers.StringRelatedField(
        many=True, read_only=True)

    class Meta:
        model = Product
        fields = "__all__"


# 👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆

class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = "__all__"


class CustomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = "__all__"
        # depth = 1


class OrderSerializer(serializers.ModelSerializer):
    customer = CustomSerializer()

    class Meta:
        model = Order
        fields = "__all__"


class OrderItemsSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    order = OrderSerializer()

    class Meta:
        model = OrderItems
        fields = "__all__"
        # depth = 1


class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerAddress
        fields = "__all__"


class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductRating
        fields = "__all__"
