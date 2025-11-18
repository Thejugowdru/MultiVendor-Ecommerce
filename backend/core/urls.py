from django.urls import path, include
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('customer-address', views.CustomerAddressView,
                basename='customer-address')
router.register('product-ratings', views.ProductRatingView,
                basename='product-ratings')


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('vendors/', views.VendorList.as_view(), name='vendor-list'),
    path('vendor/<int:pk>/', views.VendorDetail.as_view(), name='vendor-detail'),

    path('products/', views.ProductList.as_view(), name='product-list'),
    path('product/<int:pk>/', views.ProductDetail.as_view(), name='product-detail'),

    path('categories/', views.CategoryList.as_view(), name='category-list'),
    path('category/<int:pk>/', views.CategoryDetail.as_view(),
         name='category-detail'),

    path('customers/', views.CustomerList.as_view(), name='customer-list'),
    path('customer/<int:pk>/', views.CustomerDetail.as_view(),
         name='customer-detail'),


    # path('orders/', views.OrderList.as_view(), name='order-list'),
    # path('order/<int:pk>/', views.OrderDetail.as_view(), name='order-detail'),


    # path('order/items/', views.OrderItemList.as_view(), name='order-item-list'),
    # path('order/item/<int:pk>/',
    #      views.OrderItemDetail.as_view(), name='order-item-detail'),


    path('orders/', views.OrderList.as_view(), name='order-list'),
    path('order/<int:pk>/', views.OrderDetail.as_view(), name='order-detail'),

    path('', include(router.urls))

]
