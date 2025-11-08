from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.


# Vendor Model
class Vendor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.TextField()

    def __str__(self):
        return self.user.username


# Product Category Model
class ProductCategory(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField(null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Product Categories"


# Product Model
class Product(models.Model):
    category = models.ForeignKey(
        ProductCategory, on_delete=models.SET_NULL, null=True, related_name='product_category')
    vendor = models.ForeignKey(
        Vendor, on_delete=models.CASCADE)
    title = models.CharField(max_length=300)
    description = models.TextField(null=True)
    price = models.FloatField()

    def __str__(self):
        return self.title


# Customer Model
class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField()

    def __str__(self):
        return self.user.username


# Order Model
class Order(models.Model):
    customer = models.ForeignKey(
        Customer, on_delete=models.SET_NULL, null=True)
    order_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order id: {self.id} by {self.customer.user.username}"


# Order Items Model
class OrderItems(models.Model):
    order = models.ForeignKey(
        Order, on_delete=models.SET_NULL, null=True, related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.product.title if self.product else "No Product"

    class Meta:
        verbose_name_plural = "Order Items"


# Customer Address Model
class CustomerAddress(models.Model):
    customer = models.ForeignKey(
        Customer, on_delete=models.CASCADE, related_name="customer_addresses")
    address = models.TextField()
    default_address = models.BooleanField(default=False)

    def __str__(self):
        return self.address


# Product Rating and Reviews
class ProductRating(models.Model):
    customer = models.ForeignKey(
        Customer, on_delete=models.CASCADE, related_name="customer_ratings")
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="product_ratings")
    rating = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)])
    reviews = models.TextField(null=True)
    add_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.reviews} [{self.rating}]'
