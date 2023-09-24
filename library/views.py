# library/views.py

from rest_framework import generics
from .models import Category, Book, Order
from .serializers import CategorySerializer, BookSerializer, OrderSerializer

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class BookListView(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        category_name = self.kwargs['category_name']
        return Book.objects.filter(category__name=category_name)

class OrderCreateView(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
