<configuration>
  <system.webServer>
          <staticContent>
              <mimeMap fileExtension=".json" mimeType="application/json" />
              <mimeMap fileExtension=".otf" mimeType="application" />
              <mimeMap fileExtension=".woff" mimeType="application/node_modules" />
              <mimeMap fileExtension=".otf" mimeType="application/node_modules" />
              <mimeMap fileExtension=".woff2" mimeType="application/node_modules" />
              <mimeMap fileExtension=".json" mimeType="assets/i18n/parade-connect" />
              <mimeMap fileExtension=".ts" mimeType="application" />
              <mimeMap fileExtension=".woff" mimeType="application/x-font-woff" />
              <mimeMap fileExtension=".otf" mimeType="application/font-awesome" />
              <mimeMap fileExtension=".woff" mimeType="application/x-font-woff" />
              <mimeMap fileExtension=".woff2" mimeType="font/woff2" />
          </staticContent>
  </system.webServer>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Angular Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="./index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
