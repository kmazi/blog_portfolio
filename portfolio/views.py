from django.views.generic import TemplateView

# Create your views here.
class HomeView(TemplateView):
  template_name = 'portfolio/home.html'


class ContactView(TemplateView):
  template_name = 'portfolio/contact.html'


class AboutView(TemplateView):
  template_name = 'portfolio/about.html'
  
