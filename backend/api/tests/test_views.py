from django.test import TestCase, Client
from unittest.mock import patch

class GetAboutViewTest(TestCase):
    def setUp(self):
        self.client = Client()

    @patch("api.views.about_collection")
    def test_get_about_success(self, mock_collection):
        # Mock MongoDB response
        mock_data = {
            "_id": "fakeid123",
            "name": "Jane Doe",
            "title": "Developer",
            "bio": "I build stuff",
            "skills": ["Python", "Docker"]
        }
        mock_collection.find_one.return_value = mock_data

        response = self.client.get("/api/about/")

        self.assertEqual(response.status_code, 200)
        data = response.json()
        print("RESPONSE JSON:", response.json())
        self.assertEqual(data["message"]["name"], "Jane Doe")
        self.assertEqual(data["message"]["title"], "Developer")

    @patch("api.views.about_collection")
    def test_get_about_empty(self, mock_collection):
        # Mock no data in MongoDB
        mock_collection.find_one.return_value = None

        response = self.client.get("/api/about/")

        self.assertEqual(response.status_code, 404)
        self.assertIn("No About data found", response.content.decode())
