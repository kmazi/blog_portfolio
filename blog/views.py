from django.views.generic import TemplateView

# Create your views here.
class BlogView(TemplateView):
  template_name = 'blog/blog.html'
