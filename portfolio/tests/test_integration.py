from django.test import SimpleTestCase, Client

# Create your tests here.
class PortfolioPageTest(SimpleTestCase):
  def test_home_url_works(self):
    self.client = Client()
    response = self.client.get('/')
    self.assertContains(response, 'success', status_code=200)
    self.assertTemplateUsed(response, 'index.html')