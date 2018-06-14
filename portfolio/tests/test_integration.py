from django.test import SimpleTestCase, Client

# Create your tests here.
class PortfolioPageTest(SimpleTestCase):
  def test_home_url_works(self):
    self.client = Client()
    response = self.client.get('/')
    self.assertEqual(response.status_code, 200)
    self.assertTemplateUsed(response, 'base.html')
    self.assertTemplateUsed(response, 'portfolio/home.html')